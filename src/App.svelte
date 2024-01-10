

<script>
	import { setContext, onMount } from "svelte";
	import { getMotion } from "./utils.js";
	import { themes } from "./config.js";
	import ONSHeader from "./layout/ONSHeader.svelte";
	import ONSFooter from "./layout/ONSFooter.svelte";
	import Header from "./layout/Header.svelte";
	import Section from "./layout/Section.svelte";
	import Media from "./layout/Media.svelte";
	import Scroller from "./layout/Scroller.svelte";
	import Filler from "./layout/Filler.svelte";
	import Divider from "./layout/Divider.svelte";
	import Toggle from "./ui/Toggle.svelte";
	import Arrow from "./ui/Arrow.svelte";
	import Em from "./ui/Em.svelte";
	import Table from "./data.js";
	import RB from "./RB.js";
	import countries from "./countries.js";
	import mapstyle from "./mapstyle.js";

	import { tick } from 'svelte'
	let offices = null;
	let selected;
	let numCarsReduced=0;
	let officesDisplay = null;
	let currentCountry = null;
	let currentOffice = null;
	let oneOffice = false;
	let savedEM = 0;
	const mapboundsStart = [
      [-60, -50],
      [80, 70]
    ];
	const example = Math.floor((Math.random() * 4) + 1)
	let barChartColor = ['#0072BC', '#0072BC',];
	let optChartColor = ['#0072BC','#EF4A60',];
	let legend = false;

	// DEMO-SPECIFIC IMPORTS
	import bbox from "@turf/bbox";
	import { getData, setColors, getTopo, getBreaks, getColor } from "./utils.js";
	import { colors, units } from "./config.js";
	import { ScatterChart, LineChart, BarChart, ColumnChart } from "@onsvisual/svelte-charts";
	import { Map, MapSource, MapLayer, MapTooltip } from "@onsvisual/svelte-maps";

	// CORE CONFIG (COLOUR THEMES)
	// Set theme globally (options are 'light', 'dark' or 'lightblue')
	let theme = "light";
	setContext("theme", theme);
	setColors(themes, theme);

	// CONFIG FOR SCROLLER COMPONENTS
	// Config
	const threshold = 0.65;
	// State
	let animation = getMotion(); // Set animation preference depending on browser preference
	let id = {}; // Object to hold visible section IDs of Scroller components
	let idPrev = {}; // Object to keep track of previous IDs, to compare for changes
	onMount(() => {
		idPrev = {...id};
	});

	// DEMO-SPECIFIC CONFIG
	// Constants
	const topojson = "./data/geo_lad2021.json";
	let geojson;
	

	// Element bindings
	let mapC = null; // Bound to mapbox 'map' instance once initialised
	let mapO = null;

	// State
	let hovered; // Hovered district (chart or map)
	let xKey = "peEM"; // xKey for scatter chart
	let zKey = null;
	let displayChart = 1;
	let zKeyCountry = "selected";
	let explore = false;
	let columnChartDataCountry = null;
	let columnChartDataOffice = null;

	// FUNCTIONS (INCL. SCROLLER ACTIONS)
	// Functions for chart and map on:select and on:hover events
	function doHover(e) {
		hovered = e.detail.id;
	}

	// Functions for map component
	function fitBoundsC(bounds) {
		if (mapC) {
			mapC.fitBounds(bounds, {animate: animation, padding: 30});
		}
	}

	function fitBoundsO(bounds) {
		if (mapO) {
			mapO.fitBounds(bounds, {animate: animation, padding: 30});
		}
	}

function handleCountryChange(event) {
  currentCountry = JSON.parse(event.target.value);
	currentOffice = null;
  let zKeyOld = zKeyCountry;
  countries.forEach((country) => {
    delete country[zKeyOld];
    if (country.id === currentCountry.id) {
      country["selected" + currentCountry.id] = true;
    } else {
      country["selected" + currentCountry.id] = false;
    }
		country.totDisp=country.name + ": " + Math.round(country.totEM) + " tons of CO2 eq."
		country.peDisp=country.name + ": " + Math.round(country.peEM*100)/100 + " tons of CO2 eq."
  });
  offices = null;
  offices = Table.filter((item) => item.Country === currentCountry.id);
  zKeyCountry = "selected" + currentCountry.id;
  columnChartDataCountry = [
    {
      name: "Electricity",
      val: currentCountry.Electricity,
    },
    {
      name: "Heating & Cooling",
      val: currentCountry.Ref,
    },
    {
      name: "Car Travel",
      val: currentCountry.Fleet,
    },
    {
      name: "Air Travel",
      val: currentCountry.AT,
    },
  ];
}

function handleOfficeChange(event) {
  currentOffice = JSON.parse(event.target.value);
	oneOffice = false;
  offices.forEach((office) => {  
    if (office.ID === currentOffice.ID) {
      office["selected"] = true;
    } else {
      office["selected"] = false;
    }
  });
	if(currentOffice.Long && currentOffice.Lat) {
		currentOffice.mapbounds = [
				[(currentOffice.Long-1.5), (currentOffice.Lat-1.5)],
				[(currentOffice.Long+1.5), (currentOffice.Lat+1.5)]
			];
	}
	officesDisplay = JSON.parse(JSON.stringify(offices));
	if (officesDisplay.length > 22) {
		officesDisplay.sort((a, b) => b.totEM - a.totEM);
    officesDisplay = officesDisplay.slice(0, 22);
    if (!officesDisplay.some(office => office.ID === currentOffice.ID)) {
      officesDisplay.push(currentOffice);
			officesDisplay[officesDisplay.length-1].selected = true;
    }
  }
	if (officesDisplay.length === 1) {
		RB.forEach((nowRB) => {  
			officesDisplay.push(nowRB);
		});
		console.log(JSON.stringify(officesDisplay))
		oneOffice = true;
	}
	officesDisplay.sort((a, b) => b.totEM - a.totEM);
	if (officesDisplay[officesDisplay.length-1].selected){
		barChartColor = ['#EF4A60', '#0072BC',];
	} else {
		barChartColor = ['#0072BC','#EF4A60',];
	}
  columnChartDataOffice = [
		{
      name: "Total",
      val: currentOffice.Electricity + currentOffice.Ref+currentOffice.Fleet+currentOffice.AT,
			opt: "Initial value",
    },
    {
      name: "Electricity",
      val: currentOffice.Electricity,
			opt: "Initial value",
    },
    {
      name: "Heating & Cooling",
      val: currentOffice.Ref,
			opt: "Initial value",
    },
    {
      name: "Car Travel",
      val: currentOffice.Fleet,
			opt: "Initial value",
    },
    {
      name: "Air Travel",
      val: currentOffice.AT,
			opt: "Initial value",
    },
		{
      name: "Total",
      val: currentOffice.Electricity + currentOffice.Ref+currentOffice.Fleet+currentOffice.AT,
			opt: "Measures applied",
    },
		{
      name: "Electricity",
      val: currentOffice.Electricity,
			opt: "Measures applied",
    },
    {
      name: "Heating & Cooling",
      val: currentOffice.Ref,
			opt: "Measures applied",
    },
    {
      name: "Car Travel",
      val: currentOffice.Fleet,
			opt: "Measures applied",
    },
    {
      name: "Air Travel",
      val: currentOffice.AT,
			opt: "Measures applied",
    },
  ];
}

function handleCheckBox() {
	columnChartDataOffice[5].val = currentOffice.Electricity + currentOffice.Ref+currentOffice.Fleet+currentOffice.AT;
	columnChartDataOffice[6].val = currentOffice.Electricity;
	columnChartDataOffice[7].val = currentOffice.Ref;
	columnChartDataOffice[8].val = currentOffice.Fleet;
	columnChartDataOffice[9].val = currentOffice.AT;
	if (currentOffice.flightFrom && ((columnChartDataOffice[9].val-(currentOffice.flightEM*currentOffice.chp))>0)){
		if (mostFlownRoute.checked) {
			columnChartDataOffice[9].val = columnChartDataOffice[9].val-(currentOffice.flightEM*currentOffice.chp);
			if (columnChartDataOffice[9].val < 0) {
				columnChartDataOffice[9].val = 0
			}
		}
	}
	if (currentOffice.Electricity > 0) {
		if (ele.checked) {
			columnChartDataOffice[6].val = columnChartDataOffice[6].val * 0.9;
		}
	}
	if (currentCountry.GreenGrid && (currentOffice.VehicleNum>0)) {
		if (car.checked) {
			columnChartDataOffice[8].val = columnChartDataOffice[8].val * (1-(numCarsReduced/currentOffice.VehicleNum));
		}
	}
	if (currentOffice.AT > 0){
		if (fly.checked) {
			columnChartDataOffice[9].val = columnChartDataOffice[9].val * 0.75;
		}
	}
	if (currentOffice.Electricity > 0){
		if (sol.checked) {
			columnChartDataOffice[6].val = columnChartDataOffice[6].val * 0.5;
		}
	}
	columnChartDataOffice[5].val = columnChartDataOffice[6].val+columnChartDataOffice[7].val+columnChartDataOffice[8].val+columnChartDataOffice[9].val
	savedEM = columnChartDataOffice[0].val - columnChartDataOffice[5].val
}

function handleCarNumChange() {
	document.getElementById('car').checked = true;
	handleCheckBox()
}

function clearCheckBox() {
	columnChartDataOffice[5].val = currentOffice.Electricity + currentOffice.Ref+currentOffice.Fleet+currentOffice.AT;
	columnChartDataOffice[6].val = currentOffice.Electricity;
	columnChartDataOffice[7].val = currentOffice.Ref;
	columnChartDataOffice[8].val = currentOffice.Fleet;
	columnChartDataOffice[9].val = currentOffice.AT;
	savedEM = 0;
	numCarsReduced=0
	var mostFlownRouteCheckbox = document.getElementById('mostFlownRoute');
  if (mostFlownRouteCheckbox) {
    mostFlownRouteCheckbox.checked = false;
  }
	var eleCheckbox = document.getElementById('ele');
  if (eleCheckbox) {
    eleCheckbox.checked = false;
  }
  var carCheckbox = document.getElementById('car');
  if (carCheckbox) {
    carCheckbox.checked = false;
  }
  var flyCheckbox = document.getElementById('fly');
  if (flyCheckbox) {
    flyCheckbox.checked = false;
  }
	var solCheckbox = document.getElementById('sol');
  if (solCheckbox) {
    solCheckbox.checked = false;
  }
}

	// Actions for Scroller components
		const actions = {
			mapC: {
				map01: () => {
					fitBoundsC(mapboundsStart);
					explore = false;
				},
				map02: () => {
					if (currentCountry) {
						fitBoundsC(currentCountry.mapbounds);
						fitBoundsO(currentCountry.mapbounds);
					} else {
						fitBoundsC(mapboundsStart);
					}
					explore = false;
				},
			},
			mapO: {
				map03: () => {
					fitBoundsO(currentCountry.mapbounds);
					explore = false;
				},
				map04: () => {
					if (currentOffice) {
						fitBoundsO(currentOffice.mapbounds);
					} else {
						fitBoundsO(mapboundsStart);
					}
					explore = false;
				},
			},
			chart: {
				chart01: () => {
					displayChart = 1;
				},
				chart02: () => {
					displayChart = 2;
				},
				chart03: () => {
					displayChart = 3;
				},
				chart04: () => {
					xKey = "totEM";
					displayChart = 4;
					explore = false;
				},
				chart05: () => {
					xKey = "peEM";
					displayChart = 5;
					explore = false;
				},
				chart06: () => {
					clearCheckBox()
					optChartColor = ['#0072BC', '#0072BC',];
					displayChart = 6;
					legend = false;
					explore = false;
				},
				chart07: () => {
					optChartColor = ['#0072BC', '#00B398',];
					displayChart = 7;
					legend = true;
					explore = false;
				},
			}
		};

	// Code to run Scroller actions when new caption IDs come into view
	function runActions(codes = []) {
		codes.forEach(code => {
			if (id[code] != idPrev[code]) {
				if (actions[code][id[code]]) {
					actions[code][id[code]]();
				}
				idPrev[code] = id[code];
			}
		});
	}
	$: id && runActions(Object.keys(actions)); // Run above code when 'id' object changes
	

	getTopo(topojson, 'geog')
	.then(geo => {
		geo.features.sort((a, b) => a.properties.AREANM.localeCompare(b.properties.AREANM));
		geojson = geo;
	});
</script>

<ONSHeader filled={true} center={false} />

<Header bgcolor="#206095" bgfixed={true} theme="dark" center={false} short={true}>
	<h1>UNHCR</h1>
	<p class="text-big" style="margin-top: 5px">
		Greening and Sustainability team
	</p>
	<p style="margin-top: 20px">
		
	</p>
	<div style="margin-top: 90px;">
		<Arrow color="white" {animation}>Scroll to begin</Arrow>
	</div>
</Header>

<Filler theme="lightblue" short={true} wide={true} center={false}>
	<p class="text-big">
		In 2022, UNHCR's operations worldwide released <strong>52,371</strong> tons of CO<sub>2</sub> eq.
	</p>
	{#if example === 1}
	<p class="text-big">
		This is around as much as an Airbus A380 (the world's larest passenger plane) flying <strong>191 times</strong> from Geneva to New York.
	</p>
	{:else if example === 2}
	<p class="text-big">
		This is around as much as burning <strong>8 olympic-size swimming pools</strong> full of <strong>diesel.</strong> 
	</p>
	{:else if example === 3}
	<p class="text-big">
		This amount of greenhouse gasses could fill the volume of the <strong>Great Pyramid of Giza 11 times.</strong>
	</p>
	{:else }
	<p class="text-big">
		It would require around <strong> 200,000 average trees</strong> to compensate for UNHCR’s emissions.
	</p>
	{/if}
	<p class="text-big">
		It equals to an emission of <strong>2.58</strong> tons of CO<sub>2</sub> eq. per colleague.
	</p>
</Filler>

{#if geojson}
<Scroller {threshold} bind:id={id['mapC']}>
	<div slot="background">
		<figure>
			<div class="col-full height-full">
				<Map style={mapstyle} bind:map={mapC} interactive={false} location={{bounds: mapboundsStart}}>
					<MapSource
					  id="lad"
					  type="geojson"
					  data={geojson}
					  promoteId="AREACD"
					  maxzoom={13}>
				  </MapSource>
				</Map>
			</div>
		</figure>
	</div>
	<div slot="foreground">
		<section data-id="map01">
			<div class="col-medium">
				<p>
				Let's have a look at your country.				
				<select on:change={handleCountryChange}>
						<option value={null}>Please select country</option>
						{#each countries as country (country.id)}
								<option value={JSON.stringify(country)}>{country.name}</option>
						{/each}
				</select>
				</p>
			</div>
		</section>
		<section data-id="map02">
			<div class="col-medium">
				<p>
					Operations in 
					<strong> {currentCountry ? currentCountry.name : '- no country selected -'}</strong>
					were responsible for 
					<strong> {currentCountry ? Math.round(currentCountry.totEM/5.2371)/100 : '-'} %</strong>
					of UNHCR's total greenhouse gas emissions in 2022.
				</p>
			</div>
		</section>
	</div>
</Scroller>
{/if}

{#if currentCountry}
<Scroller {threshold} bind:id={id['chart']} splitscreen={true}>
	<div slot="background">
		<figure>
			<div class="col-wide height-full">
				{#if Table }
					<div class="chart">
						{#if displayChart === 2}
						<ScatterChart
						data={countries}
						xKey='peEM' zKey={zKeyCountry} rKey='Employees' labelKey="peDisp"
						r={[2, 8]}
						xSuffix=" tons of CO2 eq."
						colors = {['#0072BC','#EF4A60','#FAEB00', '#00B398']}
						height = "calc(100vh - 150px)"
						padding={{top: 0, bottom: 15, left: 140, right: 0}}
						labels hover/>
						{:else if displayChart === 3}
						<ColumnChart 
						data={columnChartDataCountry}
						xKey="name"
						yKey="val"
						zKey="name"
						ySuffix=" t CO2 eq."
						colors = {['#0072BC', '#00B398','#EF4A60','#FAEB00',]}
						height = "calc(100vh - 150px)" padding={{top: 0, bottom: 15, left: 140, right: 0}}/>
						<p style="font-size:10px;">
							"Electricity" emissions include emissions from fuel combustion in generators as well as emissions from the purchase of power from the national grid. <br>
							"Heating and Cooling" emissions result from refrigerant leakage used in air conditioning devices. 
						</p>
						{:else }
						<ScatterChart
						data={countries}
						xKey='totEM' zKey={zKeyCountry} rKey='Employees' labelKey="totDisp"
						r={[2, 8]}
						xSuffix=" tons of CO2 eq."
						colors = {['#0072BC','#EF4A60','#FAEB00', '#00B398']}
						height = "calc(100vh - 150px)"
						xTicks={[0, 1000, 2000, 3000, 4000]}
						padding={{top: 0, bottom: 15, left: 140, right: 0}}
						labels hover/>
						{/if}
					</div>
				{/if}
			</div>
		</figure>
	</div>

	<div slot="foreground">
		<section data-id="chart01">
			<div class="col-medium">
				<p>
					UNHCR's operations in 
					<strong> {currentCountry ? currentCountry.name : '- no country selected -'}</strong>
					in 2022 released 
					<strong> {currentCountry ? Math.round(currentCountry.totEM*100)/100 : '-'}</strong>
					tons of CO<sub>2</sub> eq. See how {currentCountry ? currentCountry.name : '- no country selected -'} is ranked among other countries in the chart.<br>
					The size of the dots corresponds to the number of colleagues.
				</p>
			</div>
		</section>
		<section data-id="chart02">
			<div class="col-medium">
				<p>
					Now let's have a look at the <strong> emission per colleague </strong>
					in {currentCountry ? currentCountry.name : '- no country selected -'}. With 
					{currentCountry ? currentCountry.Employees : '-'}
					colleagues, it amounts to 
					<strong> {currentCountry ? Math.round(currentCountry.peEM*100)/100 : '-'}</strong>
					tons of CO<sub>2</sub> eq. per colleague.
					Compare this to other countries in the chart.
				</p>
			</div>
		</section>
		<section data-id="chart03">
			<div class="col-medium">
				<p>
					See the sources of the greenhouse gas emissions in <strong> {currentCountry ? currentCountry.name : '- no country selected -'} </strong> in 2022
				</p>
			</div>
		</section>
	</div>
</Scroller>

<Scroller {threshold} 	bind:id={id['mapO']}>
	<div slot="background">
		<figure>
			<div class="col-full height-full">
			<Map style={mapstyle} bind:map={mapO} interactive={false} location={{bounds: currentCountry.mapbounds}}>
				<MapSource
					id="lad"
					type="geojson"
					data={geojson}
					promoteId="AREACD"
					maxzoom={13}>
				</MapSource>
			</Map>
			</div>
		</figure>
	</div>
	<div slot="foreground">
		<section data-id="map03">
			<div class="col-medium">
				<p>
				Let's have a look at your office.				
				<select on:change={handleOfficeChange}>
						<option value={null}>Please select office</option>
						{#each offices as office (office.ID)}
								<option value={JSON.stringify(office)}>{office.Location}</option>
						{/each}
				</select>
				</p>
			</div>
		</section>
		<section data-id="map04">
			<div class="col-medium">
				<p>
					Operations in 
					<strong> {currentOffice ? currentOffice.Location : '- no office selected -'}</strong>
					were responsible for 
					<strong> {currentOffice ? Math.round(10000*currentOffice.totEM / currentCountry.totEM)/100 : '-'} %</strong>
					of UNHCR's greenhous gas emissions in 
					{currentCountry ? currentCountry.name : '- no country selected -'}
					in 2022.
				</p>
			</div>
		</section>
	</div>
</Scroller>

{#if currentOffice }
<Scroller {threshold} bind:id={id['chart']} splitscreen={true}>
	<div slot="background">
		<figure>
			<div class="col-wide height-full">
				{#if Table }
					<div class="chart">
					{#each offices as office}
						{#if office.ID === currentOffice.ID }
							<BarChart
							data={officesDisplay.sort((a, b) => a.totEM - b.totEM)}
							{xKey} yKey="Location" zKey="selected"
							xSuffix=" tons of CO2 eq."
							colors = {barChartColor}
							height = "calc(100vh - 150px)"
							padding={{top: 0, bottom: 15, left: 140, right: 0}}/>
						{/if}
					{/each}
					</div>
				{/if}
			</div>
		</figure>
	</div>
	<div slot="foreground">
		<section data-id="chart04">
			<div class="col-medium">
				<p>
					UNHCR's operations in 
					<strong> {currentOffice ? currentOffice.Location : '- no country selected -'} </strong>
					in 2022 released 
					<strong> {currentOffice ? currentOffice.totEM : '-'}</strong>
					tons of CO<sub>2</sub> eq.
					{#if oneOffice}
						Compare {currentOffice ? currentOffice.Location : '- no country selected -'} to the Regional Bureaus in the chart.
					{:else }
						See how {currentOffice ? currentOffice.Location : '- no country selected -'} is ranked among other offices in {currentCountry ? currentCountry.name : '- no country selected -'} in the chart.
					{/if}
				</p>
			</div>
		</section>
		<section data-id="chart05">
			<div class="col-medium">
				<p>
					Now let's have a look at the <strong> emission per colleague </strong>
					in {currentOffice ? currentOffice.Location : '- no office selected -'}. With 
					{currentOffice ? currentOffice.Employees : '-'}
					colleagues, it amounts to 
					<strong> {currentOffice ? currentOffice.peEM : '-'}</strong>
					tons of CO<sub>2</sub> eq. per colleague.
					{#if oneOffice === false}
						Compare this to the other offices in {currentCountry ? currentCountry.name : '- no country selected -'} in the chart.
					{/if}
				</p>
			</div>
		</section>
	</div>
</Scroller>

<Scroller {threshold} bind:id={id['chart']} splitscreen={true}>
	<div slot="background">
		<figure>
			<div class="col-wide height-full">
				{#if Table }
					<div class="chart">
						<ColumnChart 
						data={columnChartDataOffice}
						mode="grouped"
						xKey="name"
						yKey="val"
						zKey="opt"
						ySuffix=" t CO2 eq."
						colors={optChartColor}
						height = "calc(100vh - 200px)" padding={{top: 0, bottom: 15, left: 140, right: 0}}
						{legend}/>
						<div style="height: 34px; margin-top: 20px; margin-bottom: 20px;">
						{#if savedEM !=0}
							<p style="padding: 0px; margin: 0px;">
								These measures would save <strong>{Math.round(savedEM*100)/100}</strong> tons of CO2 eq or <strong>{Math.round(10000*savedEM/columnChartDataOffice[0].val)/100} %</strong>.
							</p>
						{/if}
						</div>
						<p style="font-size:10px; margin-top: 0px;">
							"Electricity" emissions include emissions from fuel combustion in generators as well as emissions from the purchase of power from the national grid. <br>
							"Heating and Cooling" emissions result from refrigerant leakage used in air conditioning devices.
							<br> As a conservative estimate, solarization is assumed to cut electricity emissions by half. Actual savings depend on local conditions.
						</p>
					</div>
				{/if}
			</div>
		</figure>
	</div>
	<div slot="foreground">
		<section data-id="chart06">
			<div class="col-medium">
				<p>
					See the <strong>sources</strong> of the greenhouse gas emissions in <strong>{currentOffice ? currentOffice.Location : '- no office selected -'}</strong> in 2022
				</p>
			</div>
		</section>
		<section data-id="chart07">
			<div class="col-medium">
				<p>
					What can we <strong>do to reduce</strong> the emissions in {currentOffice ? currentOffice.Location : '- no office selected -'}? <br>
					<strong>Select measures</strong> to see their effect on the emissions:
				</p>
					{#if currentOffice.flightFrom && ((columnChartDataOffice[9].val-(currentOffice.flightEM*currentOffice.chp))>0)}
					<p style="font-size: 18px;">
						<input type = "checkbox" id = "mostFlownRoute" on:click={handleCheckBox}> Have no more flights between <strong>{currentOffice.flightFrom}</strong> and <strong>{currentOffice.flightTo}</strong>
					</p>
					{/if}
					{#if currentOffice.Electricity > 0}
					<p style="font-size: 18px; margin-top: 15px;">
						<input type = "checkbox" id = "ele" on:click={handleCheckBox}> Reduce your <strong>electricity</strong> consumption by 10%
					</p>
					{/if}
					{#if currentCountry.GreenGrid && (currentOffice.VehicleNum>0)}
					<p style="font-size: 18px; margin-top: 15px;">
						<input type = "checkbox" id = "car" on:click={handleCheckBox}> Replace <input type="number" bind:value={numCarsReduced} on:change={handleCarNumChange} min="0" max={currentOffice.VehicleNum}> <strong>cars</strong> by electric ones
					</p>
					{/if}
					{#if currentOffice.AT > 0}
					<p style="font-size: 18px; margin-top: 15px;">
						<input type = "checkbox" id = "fly" on:click={handleCheckBox}> <strong>Reduce</strong> your <strong>flights</strong> by one quarter
					</p>
					{/if}
					{#if currentOffice.Electricity > 0}
					<p style="font-size: 18px; margin-top: 15px;">
						<input type = "checkbox" id = "sol" on:click={handleCheckBox}> <strong> Solarize </strong>your office
					</p>
					{/if}
			</div>
		</section>
	</div>
</Scroller>


{/if}

{/if}

<ONSFooter />

<style>
	/* Styles specific to elements within the demo */
	:global(svelte-scroller-foreground) {
		pointer-events: none !important;
	}
	:global(svelte-scroller-foreground section div) {
		pointer-events: all !important;
	}
	select {
		max-width: 350px;
	}
	.chart {
		margin-top: 45px;
		width: calc(100% - 5px);
	}
	.chart-full {
		margin: 0 20px;
	}
	.chart-sml {
		font-size: 0.85em;
	}
	/* The properties below make the media DIVs grey, for visual purposes in demo */
	.media {
		background-color: #f0f0f0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-flow: column;
		flex-flow: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		text-align: center;
		color: #aaa;
	}
</style>
