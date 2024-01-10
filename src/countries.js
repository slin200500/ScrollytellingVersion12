const countries = [
  {
    id: 'aw',
    name: 'Aruba',
    mapbounds: [
      [-72.53225, 10.0311],
      [-67.53225, 15.0311],
    ],
    Employees: 11,
    peEM: 0.6418181818181817,
    totEM: 7.06,
    Electricity: 4.5,
    Ref: 1.84,
    Fleet: 0.21,
    AT: 0.51,
    GreenGrid: true,
  },
  {
    id: 'af',
    name: 'Afghanistan',
    mapbounds: [
      [60.5284298033, 29.318572496],
      [75.1580277851, 38.4862816432],
    ],
    Employees: 379,
    peEM: 7.290738786279683,
    totEM: 2763.19,
    Electricity: 1056.0399999999997,
    Ref: 61.120000000000005,
    Fleet: 65.03,
    AT: 1580.9899999999998,
  },
  {
    id: 'ao',
    name: 'Angola',
    mapbounds: [
      [11.6400960629, -17.9306364885],
      [24.0799052263, -4.43802336998],
    ],
    Employees: 41,
    peEM: 2.049268292682927,
    totEM: 84.02,
    Electricity: 8.94,
    Ref: 0.57,
    Fleet: 74.51,
    AT: 0,
    GreenGrid: true,
  },
  {
    id: 'al',
    name: 'Albania',
    mapbounds: [
      [17.6622632179, 38.656622524599996],
      [22.6622632179, 43.656622524599996],
    ],
    Employees: 19,
    peEM: 1.3289473684210527,
    totEM: 25.25,
    Electricity: 14.420000000000002,
    Ref: 0,
    Fleet: 10.829999999999998,
    AT: 0,
    GreenGrid: true,
  },
  {
    id: 'ae',
    name: 'United Arab Emirates',
    mapbounds: [
      [51.4881830178, 21.77620585785],
      [56.4881830178, 26.77620585785],
    ],
    Employees: 48,
    peEM: 4.4437500000000005,
    totEM: 213.3,
    Electricity: 63.86,
    Ref: 2.7199999999999998,
    Fleet: 15.91,
    AT: 130.81,
  },
  {
    id: 'ar',
    name: 'Argentina',
    mapbounds: [
      [-73.4154357571, -55.25],
      [-53.628348965, -21.8323104794],
    ],
    Employees: 53,
    peEM: 2.432264150943396,
    totEM: 128.91,
    Electricity: 45.71,
    Ref: 0,
    Fleet: 0,
    AT: 83.2,
  },
  {
    id: 'am',
    name: 'Armenia',
    mapbounds: [
      [42.54423282245, 37.494665025399996],
      [47.54423282245, 42.494665025399996],
    ],
    Employees: 32,
    peEM: 0.5965625,
    totEM: 19.09,
    Electricity: 7.54,
    Ref: 0,
    Fleet: 10.7,
    AT: 0.85,
  },
  {
    id: 'au',
    name: 'Australia',
    mapbounds: [
      [113.338953078, -43.6345972634],
      [153.569469029, -10.6681857235],
    ],
    Employees: 24,
    peEM: 5.370833333333334,
    totEM: 128.9,
    Electricity: 22.41,
    Ref: 0.98,
    Fleet: 0,
    AT: 105.51,
  },
  {
    id: 'at',
    name: 'Austria',
    mapbounds: [
      [9.47996951665, 45.2354457668],
      [16.9796667823, 50.2354457668],
    ],
    Employees: 19,
    peEM: 2.8373684210526315,
    totEM: 53.91,
    Electricity: 39.33,
    Ref: 0.78,
    Fleet: 0,
    AT: 13.8,
    GreenGrid: true,
  },
  {
    id: 'az',
    name: 'Azerbaijan',
    mapbounds: [
      [44.7939896991, 37.565526333150004],
      [50.3928210793, 42.565526333150004],
    ],
    Employees: 40,
    peEM: 1.056,
    totEM: 42.24,
    Electricity: 18.38,
    Ref: 1.56,
    Fleet: 22.04,
    AT: 0.25,
  },
  {
    id: 'bi',
    name: 'Burundi',
    mapbounds: [
      [27.3885945981, -5.92423512127],
      [32.3885945981, -0.9242351212699997],
    ],
    Employees: 319,
    peEM: 1.909655172413793,
    totEM: 609.18,
    Electricity: 295.53,
    Ref: 10.23,
    Fleet: 291.81,
    AT: 11.629999999999999,
  },
  {
    id: 'be',
    name: 'Belgium',
    mapbounds: [
      [1.835115594105, 48.00225362815],
      [6.835115594105, 53.00225362815],
    ],
    Employees: 61,
    peEM: 0.5255737704918033,
    totEM: 32.06,
    Electricity: 4.99,
    Ref: 2.21,
    Fleet: 0,
    AT: 24.86,
  },
  {
    id: 'bf',
    name: 'Burkina Faso',
    mapbounds: [
      [-5.47056494793, 9.61083486576],
      [2.17710778159, 15.1161577418],
    ],
    Employees: 204,
    peEM: 1.810441176470588,
    totEM: 369.33,
    Electricity: 109.79,
    Ref: 10.78,
    Fleet: 123.71,
    AT: 125.03,
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    mapbounds: [
      [87.87857160845, 20.670883287],
      [92.87857160845, 26.4465255803],
    ],
    Employees: 429,
    peEM: 1.4002331002331003,
    totEM: 600.7,
    Electricity: 469.52,
    Ref: 3.82,
    Fleet: 106.92,
    AT: 20.439999999999998,
  },
  {
    id: 'bg',
    name: 'Bulgaria',
    mapbounds: [
      [22.3805257504, 40.2347044948],
      [28.5580814959, 45.2347044948],
    ],
    Employees: 35,
    peEM: 0.2694285714285714,
    totEM: 9.43,
    Electricity: 2.19,
    Ref: 0.14,
    Fleet: 5.62,
    AT: 1.48,
  },
  {
    id: 'bs',
    name: 'Bahamas',
    mapbounds: [
      [-80.49000000000001, 22.875],
      [-75.49000000000001, 27.875],
    ],
    Employees: 0,
    peEM: 0,
    totEM: 0,
    Electricity: 0,
    Ref: 0,
    Fleet: 0,
    AT: 0,
    GreenGrid: true,
  },
  {
    id: 'ba',
    name: 'Bosnia and Herzegovina',
    mapbounds: [
      [15.17489303795, 41.4418883802],
      [20.17489303795, 46.4418883802],
    ],
    Employees: 41,
    peEM: 1.8968292682926833,
    totEM: 77.77000000000001,
    Electricity: 62.63999999999999,
    Ref: 0,
    Fleet: 14.030000000000001,
    AT: 1.1,
  },
  {
    id: 'by',
    name: 'Belarus',
    mapbounds: [
      [23.1994938494, 51.24431671815],
      [32.6936430193, 56.24431671815],
    ],
    Employees: 10,
    peEM: 0.619,
    totEM: 6.19,
    Electricity: 4.33,
    Ref: 0.51,
    Fleet: 0.68,
    AT: 0.68,
  },
  {
    id: 'bz',
    name: 'Belize',
    mapbounds: [
      [-91.16796729205001, 14.693459886150002],
      [-86.16796729205001, 19.693459886150002],
    ],
    Employees: 11,
    peEM: 1.9127272727272726,
    totEM: 21.04,
    Electricity: 3.05,
    Ref: 0.85,
    Fleet: 9.36,
    AT: 7.77,
    GreenGrid: true,
  },
  {
    id: 'br',
    name: 'Brazil',
    mapbounds: [
      [-73.9872354804, -33.7683777809],
      [-34.7299934555, 5.24448639569],
    ],
    Employees: 155,
    peEM: 2.3292258064516127,
    totEM: 361.03,
    Electricity: 22.82,
    Ref: 4.77,
    Fleet: 13.629999999999999,
    AT: 319.8,
    GreenGrid: true,
  },
  {
    id: 'bw',
    name: 'Botswana',
    mapbounds: [
      [19.8954577979, -26.8285429827],
      [29.4321883481, -17.6618156877],
    ],
    Employees: 3,
    peEM: 18.87,
    totEM: 56.61,
    Electricity: 23.84,
    Ref: 0.79,
    Fleet: 26.45,
    AT: 5.53,
  },
  {
    id: 'cf',
    name: 'Central African Republic',
    mapbounds: [
      [14.4594071794, 2.2676396753],
      [27.3742261085, 11.1423951278],
    ],
    Employees: 129,
    peEM: 4.67015503875969,
    totEM: 602.45,
    Electricity: 297.42999999999995,
    Ref: 13.57,
    Fleet: 122.54999999999998,
    AT: 168.89,
  },
  {
    id: 'ca',
    name: 'Canada',
    mapbounds: [
      [-140.99778, 41.6751050889],
      [-52.6480987209, 83.23324],
    ],
    Employees: 45,
    peEM: 1.5353333333333334,
    totEM: 69.09,
    Electricity: 38.63,
    Ref: 0,
    Fleet: 0,
    AT: 30.46,
    GreenGrid: true,
  },
  {
    id: 'ch',
    name: 'Switzerland',
    mapbounds: [
      [5.732655470394999, 44.303887641],
      [10.732655470394999, 49.303887641],
    ],
    Employees: 963,
    peEM: 1.343011422637591,
    totEM: 1293.3200000000002,
    Electricity: 27.34,
    Ref: 62.35,
    Fleet: 126.88,
    AT: 1076.75,
    GreenGrid: true,
  },
  {
    id: 'cl',
    name: 'Chile',
    mapbounds: [
      [-75.6443953112, -55.61183],
      [-66.95992, -17.5800118954],
    ],
    Employees: 24,
    peEM: 0.5125000000000001,
    totEM: 12.3,
    Electricity: 9.299999999999999,
    Ref: 1.26,
    Fleet: 0,
    AT: 1.73,
  },
  {
    id: 'cn',
    name: 'China',
    mapbounds: [
      [73.6753792663, 18.197700914],
      [135.026311477, 53.4588044297],
    ],
    Employees: 35,
    peEM: 0.6208571428571429,
    totEM: 21.73,
    Electricity: 17.62,
    Ref: 1.84,
    Fleet: 0,
    AT: 2.27,
  },
  {
    id: 'ci',
    name: 'Ivory Coast',
    mapbounds: [
      [-8.60288021487, 4.33828847902],
      [-2.56218950033, 10.5240607772],
    ],
    Employees: 47,
    peEM: 2.7914893617021272,
    totEM: 131.2,
    Electricity: 47.730000000000004,
    Ref: 0,
    Fleet: 73.6,
    AT: 9.87,
  },
  {
    id: 'cm',
    name: 'Cameroon',
    mapbounds: [
      [8.48881554529, 1.72767263428],
      [16.0128524106, 12.8593962671],
    ],
    Employees: 211,
    peEM: 3.7228436018957347,
    totEM: 785.52,
    Electricity: 178.84,
    Ref: 30.709999999999997,
    Fleet: 467.58,
    AT: 108.40000000000002,
  },
  {
    id: 'cd',
    name: 'Congo, Democratic Republic of the',
    mapbounds: [
      [12.1823368669, -13.2572266578],
      [31.1741492042, 5.25608775474],
    ],
    Employees: 460,
    peEM: 5.4438695652173905,
    totEM: 2504.18,
    Electricity: 1145.16,
    Ref: 97.27,
    Fleet: 294.65,
    AT: 967.05,
    GreenGrid: true,
  },
  {
    id: 'cg',
    name: 'Congo, Republic of the',
    mapbounds: [
      [11.0937728207, -5.03798674888],
      [18.4530652198, 3.72819651938],
    ],
    Employees: 63,
    peEM: 4.3592063492063495,
    totEM: 274.63,
    Electricity: 197.48,
    Ref: 11.96,
    Fleet: 58.5,
    AT: 6.7,
  },
  {
    id: 'co',
    name: 'Colombia',
    mapbounds: [
      [-78.9909352282, -4.29818694419],
      [-66.8763258531, 12.4373031682],
    ],
    Employees: 469,
    peEM: 0.42976545842217484,
    totEM: 201.56,
    Electricity: 77.16,
    Ref: 9.88,
    Fleet: 84.18000000000002,
    AT: 30.36,
    GreenGrid: true,
  },
  {
    id: 'cr',
    name: 'Costa Rica',
    mapbounds: [
      [-86.7439608426, 7.2210736149449986],
      [-81.7439608426, 12.221073614944999],
    ],
    Employees: 74,
    peEM: 0.4887837837837838,
    totEM: 36.17,
    Electricity: 2.56,
    Ref: 4.84,
    Fleet: 23.41,
    AT: 5.35,
    GreenGrid: true,
  },
  {
    id: 'cu',
    name: 'Cuba',
    mapbounds: [
      [-84.9749110583, 19.0220458033],
      [-74.1780248685, 24.0220458033],
    ],
    Employees: 2,
    peEM: 2.3,
    totEM: 4.6,
    Electricity: 2.69,
    Ref: 0,
    Fleet: 1.23,
    AT: 0.68,
  },
  {
    id: 'cy',
    name: 'Cyprus',
    mapbounds: [
      [30.6307739601, 32.372497056650005],
      [35.6307739601, 37.372497056650005],
    ],
    Employees: 17,
    peEM: 0.9382352941176471,
    totEM: 15.95,
    Electricity: 13.87,
    Ref: 0.8,
    Fleet: 1.02,
    AT: 0.26,
  },
  {
    id: 'cz',
    name: 'Czech Republic',
    mapbounds: [
      [12.2401111182, 47.33628652605],
      [18.8531441586, 52.33628652605],
    ],
    Employees: 10,
    peEM: 1.6219999999999999,
    totEM: 16.22,
    Electricity: 13.92,
    Ref: 0,
    Fleet: 0,
    AT: 2.3,
  },
  {
    id: 'de',
    name: 'Germany',
    mapbounds: [
      [5.98865807458, 47.3024876979],
      [15.0169958839, 54.983104153],
    ],
    Employees: 21,
    peEM: 1.8042857142857143,
    totEM: 37.89,
    Electricity: 16.66,
    Ref: 0,
    Fleet: 0,
    AT: 21.23,
  },
  {
    id: 'dj',
    name: 'Djibouti',
    mapbounds: [
      [39.98980620535, 9.313258571799999],
      [44.98980620535, 14.313258571799999],
    ],
    Employees: 44,
    peEM: 1.8022727272727275,
    totEM: 79.30000000000001,
    Electricity: 18.94,
    Ref: 3.0100000000000002,
    Fleet: 54.620000000000005,
    AT: 2.74,
  },
  {
    id: 'dk',
    name: 'Denmark',
    mapbounds: [
      [7.889991489330001, 53.7650155707],
      [12.88999148933, 58.7650155707],
    ],
    Employees: 312,
    peEM: 1.001121794871795,
    totEM: 312.35,
    Electricity: 45.12,
    Ref: 21.26,
    Fleet: 0,
    AT: 245.97,
    GreenGrid: true,
  },
  {
    id: 'do',
    name: 'Dominican Republic',
    mapbounds: [
      [-72.63152767605, 16.241737474049998],
      [-67.63152767605, 21.241737474049998],
    ],
    Employees: 45,
    peEM: 0.8242222222222223,
    totEM: 37.09,
    Electricity: 26.88,
    Ref: 0,
    Fleet: 8.52,
    AT: 1.69,
  },
  {
    id: 'dz',
    name: 'Algeria',
    mapbounds: [
      [-8.68439978681, 19.0573642034],
      [11.9995056495, 37.1183806422],
    ],
    Employees: 96,
    peEM: 2.1125000000000003,
    totEM: 202.8,
    Electricity: 174.63,
    Ref: 6.1499999999999995,
    Fleet: 19.98,
    AT: 2.04,
  },
  {
    id: 'ec',
    name: 'Ecuador',
    mapbounds: [
      [-80.9677654691, -4.95912851321],
      [-75.2337227037, 1.3809237736],
    ],
    Employees: 180,
    peEM: 1.0547222222222223,
    totEM: 189.85000000000002,
    Electricity: 24.98,
    Ref: 6.06,
    Fleet: 103.91999999999999,
    AT: 54.879999999999995,
    GreenGrid: true,
  },
  {
    id: 'eg',
    name: 'Egypt',
    mapbounds: [
      [24.70007, 22],
      [36.86623, 31.58568],
    ],
    Employees: 232,
    peEM: 2.371336206896552,
    totEM: 550.15,
    Electricity: 512.17,
    Ref: 13.989999999999998,
    Fleet: 11.290000000000001,
    AT: 12.69,
  },
  {
    id: 'er',
    name: 'Eritrea',
    mapbounds: [
      [36.3231889178, 12.4554157577],
      [43.0812260272, 17.9983074],
    ],
    Employees: 22,
    peEM: 1.7236363636363636,
    totEM: 37.92,
    Electricity: 34.71,
    Ref: 0.07,
    Fleet: 3.14,
    AT: 0,
  },
  {
    id: 'eh',
    name: 'Western Sahara',
    mapbounds: [
      [-17.159, 20.786],
      [-8.675, 27.676],
    ],
    Employees: 11,
    peEM: 1.7554545454545454,
    totEM: 19.31,
    Electricity: 17.6,
    Ref: 1.71,
    Fleet: 0,
    AT: 0,
  },
  {
    id: 'es',
    name: 'Spain',
    mapbounds: [
      [-9.39288367353, 35.946850084],
      [3.03948408368, 43.7483377142],
    ],
    Employees: 39,
    peEM: 1.235897435897436,
    totEM: 48.2,
    Electricity: 0,
    Ref: 3.1199999999999997,
    Fleet: 0,
    AT: 45.08,
  },
  {
    id: 'et',
    name: 'Ethiopia',
    mapbounds: [
      [32.95418, 3.42206],
      [47.78942, 14.95943],
    ],
    Employees: 960,
    peEM: 1.7334583333333333,
    totEM: 1664.12,
    Electricity: 741.4,
    Ref: 27.12,
    Fleet: 584.1600000000001,
    AT: 311.43000000000006,
    GreenGrid: true,
  },
  {
    id: 'fr',
    name: 'France',
    mapbounds: [
      [-5, 42.163],
      [8.3, 51.1485061713],
    ],
    Employees: 56,
    peEM: 0.8923214285714286,
    totEM: 49.97,
    Electricity: 5.53,
    Ref: 0,
    Fleet: 0,
    AT: 44.44,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    mapbounds: [
      [-7.57216793459, 49.959999905],
      [1.68153079591, 58.6350001085],
    ],
    Employees: 52,
    peEM: 1.1207692307692307,
    totEM: 58.28,
    Electricity: 4.62,
    Ref: 2.14,
    Fleet: 0,
    AT: 51.51,
  },
  {
    id: 'ge',
    name: 'Georgia',
    mapbounds: [
      [39.9550085793, 39.80877442075],
      [46.6379081561, 44.80877442075],
    ],
    Employees: 30,
    peEM: 1.6926666666666668,
    totEM: 50.78,
    Electricity: 23.330000000000002,
    Ref: 0,
    Fleet: 26.72,
    AT: 0.72,
    GreenGrid: true,
  },
  {
    id: 'gh',
    name: 'Ghana',
    mapbounds: [
      [-3.592124192705, 4.71046214438],
      [1.407875807295, 11.0983409693],
    ],
    Employees: 45,
    peEM: 1.8311111111111111,
    totEM: 82.4,
    Electricity: 27.06,
    Ref: 4.04,
    Fleet: 45.57,
    AT: 5.73,
  },
  {
    id: 'gr',
    name: 'Greece',
    mapbounds: [
      [20.1500159034, 34.9199876979],
      [26.6041955909, 41.8269046087],
    ],
    Employees: 151,
    peEM: 1.3290728476821192,
    totEM: 200.69,
    Electricity: 136.26999999999998,
    Ref: 9.599999999999998,
    Fleet: 0.4900000000000001,
    AT: 54.35,
  },
  {
    id: 'gt',
    name: 'Guatemala',
    mapbounds: [
      [-92.727135688, 13.277331854700002],
      [-87.727135688, 18.2773318547],
    ],
    Employees: 130,
    peEM: 1.5218461538461538,
    totEM: 197.84,
    Electricity: 88.62,
    Ref: 10.709999999999999,
    Fleet: 42.449999999999996,
    AT: 56.06000000000001,
    GreenGrid: true,
  },
  {
    id: 'gy',
    name: 'Guyana',
    mapbounds: [
      [-61.4748443264, 1.26808828369],
      [-56.4748443264, 8.36703481692],
    ],
    Employees: 14,
    peEM: 16.644285714285715,
    totEM: 233.02,
    Electricity: 227.49,
    Ref: 0.7,
    Fleet: 2.33,
    AT: 2.49,
    GreenGrid: true,
  },
  {
    id: 'hk',
    name: 'Hong Kong',
    mapbounds: [
      [111.6717, 19.80811],
      [116.6717, 24.80811],
    ],
    Employees: 33,
    peEM: 1.6593939393939394,
    totEM: 54.76,
    Electricity: 49.08,
    Ref: 0.38,
    Fleet: 0,
    AT: 5.3,
  },
  {
    id: 'hn',
    name: 'Honduras',
    mapbounds: [
      [-89.3533259753, 11.9950457829],
      [-83.147219001, 16.9950457829],
    ],
    Employees: 102,
    peEM: 1.129607843137255,
    totEM: 115.22,
    Electricity: 39.22,
    Ref: 5.460000000000001,
    Fleet: 44.69,
    AT: 25.86,
  },
  {
    id: 'hr',
    name: 'Croatia',
    mapbounds: [
      [13.6569755388, 41.9918711411],
      [19.3904757016, 46.9918711411],
    ],
    Employees: 14,
    peEM: 0.5721428571428572,
    totEM: 8.01,
    Electricity: 5.43,
    Ref: 0,
    Fleet: 1.93,
    AT: 0.65,
    GreenGrid: true,
  },
  {
    id: 'hu',
    name: 'Hungary',
    mapbounds: [
      [16.2022982113, 44.691667588849995],
      [22.710531447, 49.691667588849995],
    ],
    Employees: 617,
    peEM: 0.9614424635332252,
    totEM: 593.2099999999999,
    Electricity: 306.59999999999997,
    Ref: 35.290000000000006,
    Fleet: 13.899999999999999,
    AT: 237.42,
  },
  {
    id: 'id',
    name: 'Indonesia',
    mapbounds: [
      [95.2930261576, -10.3599874813],
      [141.03385176, 5.47982086834],
    ],
    Employees: 73,
    peEM: 1.4923287671232877,
    totEM: 108.94,
    Electricity: 106.30999999999999,
    Ref: 1.04,
    Fleet: 0,
    AT: 1.58,
  },
  {
    id: 'in',
    name: 'India',
    mapbounds: [
      [68.1766451354, 7.96553477623],
      [97.4025614766, 35.4940095078],
    ],
    Employees: 96,
    peEM: 1.0345833333333334,
    totEM: 99.32000000000001,
    Electricity: 79.75,
    Ref: 2.17,
    Fleet: 5.3100000000000005,
    AT: 12.09,
  },
  {
    id: 'ir',
    name: 'Iran',
    mapbounds: [
      [44.1092252948, 25.0782370061],
      [63.3166317076, 39.7130026312],
    ],
    Employees: 325,
    peEM: 0.8483076923076924,
    totEM: 275.70000000000005,
    Electricity: 214.90000000000003,
    Ref: 8.95,
    Fleet: 49.120000000000005,
    AT: 2.73,
  },
  {
    id: 'iq',
    name: 'Iraq',
    mapbounds: [
      [38.7923405291, 29.0990251735],
      [48.5679712258, 37.3852635768],
    ],
    Employees: 487,
    peEM: 1.9637987679671456,
    totEM: 956.3699999999999,
    Electricity: 552.1300000000001,
    Ref: 17.84,
    Fleet: 288.88,
    AT: 97.51,
  },
  {
    id: 'il',
    name: 'Israel',
    mapbounds: [
      [32.55091515475, 28.889376329050002],
      [37.55091515475, 33.88937632905],
    ],
    Employees: 23,
    peEM: 0.9891304347826086,
    totEM: 22.75,
    Electricity: 18.17,
    Ref: 1.32,
    Fleet: 1.18,
    AT: 2.09,
  },
  {
    id: 'it',
    name: 'Italy',
    mapbounds: [
      [6.7499552751, 36.619987291],
      [18.4802470232, 47.1153931748],
    ],
    Employees: 119,
    peEM: 0.6063865546218488,
    totEM: 72.16,
    Electricity: 41.41,
    Ref: 4.66,
    Fleet: 0,
    AT: 26.11,
  },
  {
    id: 'jo',
    name: 'Jordan',
    mapbounds: [
      [34.559035475399995, 28.7880905218],
      [39.559035475399995, 33.7880905218],
    ],
    Employees: 657,
    peEM: 1.424490106544901,
    totEM: 935.89,
    Electricity: 668.64,
    Ref: 52.59,
    Fleet: 150.49,
    AT: 64.19,
  },
  {
    id: 'jp',
    name: 'Japan',
    mapbounds: [
      [129.408463169, 31.0295791692],
      [145.543137242, 45.5514834662],
    ],
    Employees: 35,
    peEM: 1.0245714285714285,
    totEM: 35.86,
    Electricity: 22.36,
    Ref: 3.91,
    Fleet: 0,
    AT: 9.59,
  },
  {
    id: 'kz',
    name: 'Kazakhstan',
    mapbounds: [
      [46.4664457538, 40.6623245306],
      [87.3599703308, 55.3852501491],
    ],
    Employees: 24,
    peEM: 1.1291666666666667,
    totEM: 27.1,
    Electricity: 17.4,
    Ref: 0,
    Fleet: 6.470000000000001,
    AT: 3.23,
  },
  {
    id: 'ke',
    name: 'Kenya',
    mapbounds: [
      [33.8935689697, -4.67677],
      [41.8550830926, 5.506],
    ],
    Employees: 566,
    peEM: 2.8672614840989397,
    totEM: 1622.87,
    Electricity: 626.79,
    Ref: 27.13,
    Fleet: 189.91,
    AT: 779.01,
    GreenGrid: true,
  },
  {
    id: 'kg',
    name: 'Kyrgyzstan',
    mapbounds: [
      [69.464886916, 38.78890127215],
      [80.2599902689, 43.78890127215],
    ],
    Employees: 7,
    peEM: 2.1757142857142857,
    totEM: 15.23,
    Electricity: 0.98,
    Ref: 8.57,
    Fleet: 4.36,
    AT: 1.31,
    GreenGrid: true,
  },
  {
    id: 'kr',
    name: 'South Korea',
    mapbounds: [
      [125.29285119049999, 34.0011444158],
      [130.2928511905, 39.0011444158],
    ],
    Employees: 61,
    peEM: 0.5219672131147541,
    totEM: 31.84,
    Electricity: 17.69,
    Ref: 2.74,
    Fleet: 0,
    AT: 11.4,
  },
  {
    id: 'xk',
    name: 'Kosovo',
    mapbounds: [
      [18.6562502, 40.1567137],
      [23.6562502, 45.1567137],
    ],
    Employees: 17,
    peEM: 1.484705882352941,
    totEM: 25.24,
    Electricity: 22.47,
    Ref: 1.78,
    Fleet: 0,
    AT: 1,
  },
  {
    id: 'kw',
    name: 'Kuwait',
    mapbounds: [
      [44.992403802300004, 26.792566331499998],
      [49.992403802300004, 31.792566331499998],
    ],
    Employees: 17,
    peEM: 1.0576470588235294,
    totEM: 17.98,
    Electricity: 2.12,
    Ref: 0.52,
    Fleet: 14.25,
    AT: 1.09,
  },
  {
    id: 'lb',
    name: 'Lebanon',
    mapbounds: [
      [33.3689014015, 31.3669770371],
      [38.3689014015, 36.3669770371],
    ],
    Employees: 821,
    peEM: 1.7324725943970767,
    totEM: 1422.36,
    Electricity: 1252.9099999999999,
    Ref: 63.4,
    Fleet: 92.42,
    AT: 13.620000000000001,
  },
  {
    id: 'lr',
    name: 'Liberia',
    mapbounds: [
      [-11.989247300655, 3.9484051579],
      [-6.989247300655, 8.9484051579],
    ],
    Employees: 48,
    peEM: 5.997083333333333,
    totEM: 287.86,
    Electricity: 201.9,
    Ref: 0,
    Fleet: 79.7,
    AT: 6.26,
  },
  {
    id: 'ly',
    name: 'Libya',
    mapbounds: [
      [9.31941084152, 19.58047],
      [25.16482, 33.1369957545],
    ],
    Employees: 177,
    peEM: 1.650282485875706,
    totEM: 292.09999999999997,
    Electricity: 266.4,
    Ref: 5.4,
    Fleet: 5.74,
    AT: 14.57,
  },
  {
    id: 'lk',
    name: 'Sri Lanka',
    mapbounds: [
      [78.24156294139999, 5.39622376142],
      [83.24156294139999, 10.39622376142],
    ],
    Employees: 16,
    peEM: 3.010625,
    totEM: 48.17,
    Electricity: 43,
    Ref: 1.52,
    Fleet: 3.42,
    AT: 0.23,
  },
  {
    id: 'lt',
    name: 'Lithuania',
    mapbounds: [
      [21.0558004086, 52.63911530215],
      [26.5882792498, 57.63911530215],
    ],
    Employees: 4,
    peEM: 0.195,
    totEM: 0.78,
    Electricity: 0.6,
    Ref: 0,
    Fleet: 0,
    AT: 0.18,
    GreenGrid: true,
  },
  {
    id: 'lu',
    name: 'Luxembourg',
    mapbounds: [
      [3.45840152347, 47.28535940205],
      [8.45840152347, 52.28535940205],
    ],
    Employees: 2,
    peEM: 0.485,
    totEM: 0.97,
    Electricity: 0.45,
    Ref: 0.1,
    Fleet: 0,
    AT: 0.42,
    GreenGrid: true,
  },
  {
    id: 'ma',
    name: 'Morocco',
    mapbounds: [
      [-17.0204284327, 21.4207341578],
      [-1.12455115397, 35.7599881048],
    ],
    Employees: 54,
    peEM: 1.0888888888888888,
    totEM: 58.8,
    Electricity: 31.7,
    Ref: 5.26,
    Fleet: 9.15,
    AT: 12.69,
  },
  {
    id: 'md',
    name: 'Moldova',
    mapbounds: [
      [25.82199771495, 44.477701321],
      [30.82199771495, 49.477701321],
    ],
    Employees: 95,
    peEM: 1.033157894736842,
    totEM: 98.14999999999999,
    Electricity: 14.260000000000002,
    Ref: 2.36,
    Fleet: 61.120000000000005,
    AT: 20.39,
  },
  {
    id: 'mx',
    name: 'Mexico',
    mapbounds: [
      [-117.12776, 14.5388286402],
      [-86.811982388, 32.72083],
    ],
    Employees: 333,
    peEM: 2.136006006006006,
    totEM: 711.29,
    Electricity: 143.55,
    Ref: 10.219999999999999,
    Fleet: 100.73,
    AT: 456.79999999999995,
  },
  {
    id: 'mk',
    name: 'Macedonia',
    mapbounds: [
      [19.2077635751, 39.08149323175],
      [24.2077635751, 44.08149323175],
    ],
    Employees: 24,
    peEM: 2.4904166666666665,
    totEM: 59.769999999999996,
    Electricity: 48.150000000000006,
    Ref: 0,
    Fleet: 8.73,
    AT: 2.8899999999999997,
  },
  {
    id: 'ml',
    name: 'Mali',
    mapbounds: [
      [-12.1707502914, 10.0963607854],
      [4.27020999514, 24.9745740829],
    ],
    Employees: 109,
    peEM: 13.197798165137614,
    totEM: 1438.56,
    Electricity: 1210.61,
    Ref: 24.140000000000004,
    Fleet: 61.720000000000006,
    AT: 142.09,
  },
  {
    id: 'mt',
    name: 'Malta',
    mapbounds: [
      [11.9978337, 33.3983871],
      [16.9978337, 38.3983871],
    ],
    Employees: 11,
    peEM: 0.6663636363636364,
    totEM: 7.33,
    Electricity: 4.77,
    Ref: 0,
    Fleet: 0,
    AT: 2.56,
  },
  {
    id: 'mm',
    name: 'Myanmar',
    mapbounds: [
      [92.3032344909, 9.93295990645],
      [101.180005324, 28.335945136],
    ],
    Employees: 238,
    peEM: 0.920252100840336,
    totEM: 219.01999999999998,
    Electricity: 139.53,
    Ref: 59.300000000000004,
    Fleet: 20.09,
    AT: 0.06,
  },
  {
    id: 'me',
    name: 'Montenegro',
    mapbounds: [
      [16.8949, 40.200694999999996],
      [21.8949, 45.200694999999996],
    ],
    Employees: 16,
    peEM: 1.649375,
    totEM: 26.39,
    Electricity: 16.31,
    Ref: 1.24,
    Fleet: 8.2,
    AT: 0.64,
  },
  {
    id: 'mn',
    name: 'Mongolia',
    mapbounds: [
      [87.7512642761, 41.5974095729],
      [119.772823928, 52.0473660345],
    ],
    Employees: 0,
    peEM: 0,
    totEM: 2.92,
    Electricity: 2.92,
    Ref: 0,
    Fleet: 0,
    AT: 0,
  },
  {
    id: 'mz',
    name: 'Mozambique',
    mapbounds: [
      [30.1794812355, -26.7421916643],
      [40.7754752948, -10.3170960425],
    ],
    Employees: 131,
    peEM: 1.4155725190839694,
    totEM: 185.44,
    Electricity: 12.549999999999999,
    Ref: 2.38,
    Fleet: 36.6,
    AT: 133.91,
    GreenGrid: true,
  },
  {
    id: 'mr',
    name: 'Mauritania',
    mapbounds: [
      [-17.0634232243, 14.6168342147],
      [-4.92333736817, 27.3957441269],
    ],
    Employees: 294,
    peEM: 1.6439455782312926,
    totEM: 483.32000000000005,
    Electricity: 171.26,
    Ref: 12.43,
    Fleet: 86.52,
    AT: 213.10999999999999,
  },
  {
    id: 'mw',
    name: 'Malawi',
    mapbounds: [
      [31.7300350278, -16.8012997372],
      [36.7300350278, -9.23059905359],
    ],
    Employees: 102,
    peEM: 0.8707843137254901,
    totEM: 88.82,
    Electricity: 52.96,
    Ref: 5.050000000000001,
    Fleet: 25.82,
    AT: 4.99,
  },
  {
    id: 'my',
    name: 'Malaysia',
    mapbounds: [
      [100.085756871, 0.773131415201],
      [119.181903925, 6.92805288332],
    ],
    Employees: 202,
    peEM: 1.2368316831683168,
    totEM: 249.84,
    Electricity: 208.5,
    Ref: 0,
    Fleet: 30.24,
    AT: 11.1,
  },
  {
    id: 'ne',
    name: 'Niger',
    mapbounds: [
      [0.295646396495, 11.6601671412],
      [15.9032466977, 23.4716684026],
    ],
    Employees: 289,
    peEM: 3.938200692041523,
    totEM: 1138.14,
    Electricity: 748.48,
    Ref: 0,
    Fleet: 171.70999999999998,
    AT: 217.93000000000004,
  },
  {
    id: 'ng',
    name: 'Nigeria',
    mapbounds: [
      [2.69170169436, 4.24059418377],
      [14.5771777686, 13.8659239771],
    ],
    Employees: 260,
    peEM: 8.760576923076924,
    totEM: 2277.75,
    Electricity: 1839.78,
    Ref: 41.790000000000006,
    Fleet: 200.67000000000002,
    AT: 195.48000000000002,
  },
  {
    id: 'nl',
    name: 'Netherlands',
    mapbounds: [
      [2.7035122005499996, 49.657062181200004],
      [7.70351220055, 54.657062181200004],
    ],
    Employees: 26,
    peEM: 2.921923076923077,
    totEM: 75.97,
    Electricity: 57.96,
    Ref: 0,
    Fleet: 0,
    AT: 18,
  },
  {
    id: 'np',
    name: 'Nepal',
    mapbounds: [
      [80.0884245137, 25.9103075221],
      [88.1748043151, 30.9103075221],
    ],
    Employees: 21,
    peEM: 1.0038095238095237,
    totEM: 21.08,
    Electricity: 5.45,
    Ref: 0,
    Fleet: 4.21,
    AT: 11.43,
    GreenGrid: true,
  },
  {
    id: 'pk',
    name: 'Pakistan',
    mapbounds: [
      [60.8742484882, 23.6919650335],
      [77.8374507995, 37.1330309108],
    ],
    Employees: 417,
    peEM: 0.9735011990407674,
    totEM: 405.95,
    Electricity: 283.59,
    Ref: 32.019999999999996,
    Fleet: 41.669999999999995,
    AT: 48.660000000000004,
  },
  {
    id: 'pa',
    name: 'Panama',
    mapbounds: [
      [-82.9657830472, 5.91607575117],
      [-77.2425664944, 10.91607575117],
    ],
    Employees: 142,
    peEM: 2.562112676056338,
    totEM: 363.82,
    Electricity: 44.16,
    Ref: 6.51,
    Fleet: 8.19,
    AT: 304.96000000000004,
    GreenGrid: true,
  },
  {
    id: 'pe',
    name: 'Peru',
    mapbounds: [
      [-81.4109425524, -18.3479753557],
      [-68.6650797187, -0.0572054988649],
    ],
    Employees: 75,
    peEM: 1.5728000000000002,
    totEM: 117.96000000000001,
    Electricity: 15.55,
    Ref: 1.39,
    Fleet: 22.400000000000002,
    AT: 78.61000000000001,
  },
  {
    id: 'ph',
    name: 'Philippines',
    mapbounds: [
      [117.17427453, 5.58100332277],
      [126.537423944, 18.5052273625],
    ],
    Employees: 21,
    peEM: 2.8133333333333335,
    totEM: 59.08,
    Electricity: 31.64,
    Ref: 0,
    Fleet: 22.65,
    AT: 4.79,
  },
  {
    id: 'pg',
    name: 'Papua New Guinea',
    mapbounds: [
      [141.000210403, -10.6524760881],
      [156.019965448, -2.50000212973],
    ],
    Employees: 1,
    peEM: 9.67,
    totEM: 9.67,
    Electricity: 1.11,
    Ref: 0,
    Fleet: 1.04,
    AT: 7.52,
  },
  {
    id: 'pl',
    name: 'Poland',
    mapbounds: [
      [14.0745211117, 49.0273953314],
      [24.0299857927, 54.8515359564],
    ],
    Employees: 140,
    peEM: 1.5180714285714285,
    totEM: 212.53,
    Electricity: 146.28,
    Ref: 12.33,
    Fleet: 7.2,
    AT: 46.74,
  },
  {
    id: 'pt',
    name: 'Portugal',
    mapbounds: [
      [-10.457829148785, 36.838268541],
      [-5.457829148785001, 42.280468655],
    ],
    Employees: 5,
    peEM: 3.4560000000000004,
    totEM: 17.28,
    Electricity: 6.73,
    Ref: 0,
    Fleet: 0,
    AT: 10.55,
  },
  {
    id: 'qa',
    name: 'Qatar',
    mapbounds: [
      [48.67530561705, 22.83545644785],
      [53.67530561705, 27.83545644785],
    ],
    Employees: 6,
    peEM: 11.061666666666667,
    totEM: 66.37,
    Electricity: 23.18,
    Ref: 0.52,
    Fleet: 0.56,
    AT: 42.11,
  },
  {
    id: 'ro',
    name: 'Romania',
    mapbounds: [
      [20.2201924985, 43.454662990900005],
      [29.62654341, 48.454662990900005],
    ],
    Employees: 98,
    peEM: 0.7764285714285715,
    totEM: 76.09,
    Electricity: 62.1,
    Ref: 0,
    Fleet: 5.6000000000000005,
    AT: 8.389999999999999,
  },
  {
    id: 'ru',
    name: 'Russia',
    mapbounds: [
      [-180, 41.151416124],
      [180, 81.2504],
    ],
    Employees: 22,
    peEM: 1.7727272727272727,
    totEM: 39,
    Electricity: 26.35,
    Ref: 1.32,
    Fleet: 1.84,
    AT: 9.5,
  },
  {
    id: 'rw',
    name: 'Rwanda',
    mapbounds: [
      [27.42053063325, -4.5262584367],
      [32.420530633249996, 0.47374156329999995],
    ],
    Employees: 270,
    peEM: 1.565148148148148,
    totEM: 422.59,
    Electricity: 91.87,
    Ref: 22.93,
    Fleet: 300.96000000000004,
    AT: 6.81,
  },
  {
    id: 'sa',
    name: 'Saudi Arabia',
    mapbounds: [
      [34.6323360532, 16.3478913436],
      [55.6666593769, 32.161008816],
    ],
    Employees: 22,
    peEM: 4.743181818181818,
    totEM: 104.35,
    Electricity: 68.16,
    Ref: 0.95,
    Fleet: 9.02,
    AT: 26.22,
  },
  {
    id: 'sd',
    name: 'Sudan',
    mapbounds: [
      [21.93681, 8.61972971293],
      [38.4100899595, 22],
    ],
    Employees: 674,
    peEM: 4.650697329376854,
    totEM: 3134.5699999999993,
    Electricity: 1493,
    Ref: 0,
    Fleet: 502.49999999999994,
    AT: 1139.06,
    GreenGrid: true,
  },
  {
    id: 'sn',
    name: 'Senegal',
    mapbounds: [
      [-17.6250426905, 11.96517680505],
      [-11.4678991358, 16.96517680505],
    ],
    Employees: 43,
    peEM: 9.151860465116279,
    totEM: 393.53000000000003,
    Electricity: 191.7,
    Ref: 10.5,
    Fleet: 24.46,
    AT: 166.87,
  },
  {
    id: 'sv',
    name: 'El Salvador',
    mapbounds: [
      [-91.40952877475, 11.2865748153],
      [-86.40952877475, 16.2865748153],
    ],
    Employees: 102,
    peEM: 0.72,
    totEM: 73.44,
    Electricity: 22.52,
    Ref: 13.94,
    Fleet: 31.14,
    AT: 5.83,
    GreenGrid: true,
  },
  {
    id: 'so',
    name: 'Somalia',
    mapbounds: [
      [40.98105, -1.68325],
      [51.13387, 12.02464],
    ],
    Employees: 206,
    peEM: 2.6671359223300968,
    totEM: 549.43,
    Electricity: 298.49,
    Ref: 11.36,
    Fleet: 19.799999999999997,
    AT: 219.81,
  },
  {
    id: 'rs',
    name: 'Serbia',
    mapbounds: [
      [18.407919253800003, 41.7084771209],
      [23.407919253800003, 46.7084771209],
    ],
    Employees: 46,
    peEM: 1.5323913043478259,
    totEM: 70.49,
    Electricity: 11.52,
    Ref: 1.7000000000000002,
    Fleet: 56.2,
    AT: 1.0699999999999998,
  },
  {
    id: 'ss',
    name: 'South Sudan',
    mapbounds: [
      [23.8869795809, 3.50917],
      [35.2980071182, 12.2480077571],
    ],
    Employees: 438,
    peEM: 5.789703196347033,
    totEM: 2535.8900000000003,
    Electricity: 1733.2799999999997,
    Ref: 24.760000000000005,
    Fleet: 225.55000000000004,
    AT: 552.27,
  },
  {
    id: 'sk',
    name: 'Slovakia',
    mapbounds: [
      [16.8799829444, 46.1650014309],
      [22.5581376482, 51.1650014309],
    ],
    Employees: 45,
    peEM: 3.4522222222222223,
    totEM: 155.35,
    Electricity: 145.86,
    Ref: 1.83,
    Fleet: 3.32,
    AT: 4.34,
  },
  {
    id: 'si',
    name: 'Slovenia',
    mapbounds: [
      [12.631, 43.652],
      [17.631, 48.652],
    ],
    Employees: 2,
    peEM: 1.175,
    totEM: 2.35,
    Electricity: 1.77,
    Ref: 0,
    Fleet: 0,
    AT: 0.58,
  },
  {
    id: 'sy',
    name: 'Syria',
    mapbounds: [
      [35.7007979673, 32.271405035949996],
      [42.3495910988, 37.271405035949996],
    ],
    Employees: 519,
    peEM: 3.329788053949904,
    totEM: 1728.16,
    Electricity: 1490.4799999999998,
    Ref: 25.950000000000003,
    Fleet: 52.84,
    AT: 158.91,
  },
  {
    id: 'td',
    name: 'Chad',
    mapbounds: [
      [13.5403935076, 7.42192454674],
      [23.88689, 23.40972],
    ],
    Employees: 413,
    peEM: 12.30900726392252,
    totEM: 5083.620000000001,
    Electricity: 4065.96,
    Ref: 119.48,
    Fleet: 257.66999999999996,
    AT: 640.46,
  },
  {
    id: 'tg',
    name: 'Togo',
    mapbounds: [
      [-1.59227210122495, 5.92883738853],
      [3.40772789877505, 11.0186817489],
    ],
    Employees: 9,
    peEM: 2.066666666666667,
    totEM: 18.6,
    Electricity: 4.33,
    Ref: 0,
    Fleet: 13.43,
    AT: 0.84,
    GreenGrid: true,
  },
  {
    id: 'th',
    name: 'Thailand',
    mapbounds: [
      [97.3758964376, 5.69138418215],
      [105.589038527, 20.4178496363],
    ],
    Employees: 238,
    peEM: 0.9744117647058823,
    totEM: 231.91,
    Electricity: 60.03,
    Ref: 10.560000000000002,
    Fleet: 32.33,
    AT: 128.99,
  },
  {
    id: 'tj',
    name: 'Tajikistan',
    mapbounds: [
      [67.4422196796, 36.34919230805],
      [74.9800024759, 41.34919230805],
    ],
    Employees: 18,
    peEM: 1.0266666666666666,
    totEM: 18.48,
    Electricity: 0.43,
    Ref: 2.2,
    Fleet: 12.24,
    AT: 3.61,
    GreenGrid: true,
  },
  {
    id: 'tt',
    name: 'Trinidad & Tobago',
    mapbounds: [
      [-63.9225, 7.945],
      [-58.9225, 12.945],
    ],
    Employees: 32,
    peEM: 3.1159375,
    totEM: 99.71,
    Electricity: 88.61,
    Ref: 2.98,
    Fleet: 2.01,
    AT: 6.1,
  },
  {
    id: 'tn',
    name: 'Tunisia',
    mapbounds: [
      [7.006634555694999, 30.3075560572],
      [12.006634555695, 37.3499944118],
    ],
    Employees: 154,
    peEM: 0.559935064935065,
    totEM: 86.23,
    Electricity: 24.31,
    Ref: 10.690000000000001,
    Fleet: 37.92,
    AT: 13.31,
  },
  {
    id: 'tr',
    name: 'Turkey',
    mapbounds: [
      [26.0433512713, 35.8215347357],
      [44.7939896991, 42.1414848903],
    ],
    Employees: 442,
    peEM: 1.7784841628959276,
    totEM: 786.09,
    Electricity: 369.00000000000006,
    Ref: 33.9,
    Fleet: 126.60000000000002,
    AT: 256.59999999999997,
  },
  {
    id: 'tz',
    name: 'Tanzania',
    mapbounds: [
      [29.3399975929, -11.7209380022],
      [40.31659, -0.95],
    ],
    Employees: 261,
    peEM: 2.5139846743295022,
    totEM: 656.1500000000001,
    Electricity: 174.04,
    Ref: 21.22,
    Fleet: 329.73,
    AT: 131.14,
  },
  {
    id: 'ug',
    name: 'Uganda',
    mapbounds: [
      [29.5794661801, -1.44332244223],
      [35.03599, 4.24988494736],
    ],
    Employees: 702,
    peEM: 2.20991452991453,
    totEM: 1551.3600000000001,
    Electricity: 540.69,
    Ref: 32.38,
    Fleet: 945,
    AT: 33.23,
  },
  {
    id: 'ua',
    name: 'Ukraine',
    mapbounds: [
      [22.0856083513, 44.3614785833],
      [40.0807890155, 52.3350745713],
    ],
    Employees: 410,
    peEM: 1.3418536585365857,
    totEM: 550.1600000000001,
    Electricity: 330.34999999999997,
    Ref: 13.46,
    Fleet: 203.28,
    AT: 3.08,
  },
  {
    id: 'uy',
    name: 'Uruguay',
    mapbounds: [
      [-58.4270741441, -35.03116647715],
      [-53.209588996, -30.031166477150002],
    ],
    Employees: 2,
    peEM: 3.78,
    totEM: 7.56,
    Electricity: 0.18,
    Ref: 0.19,
    Fleet: 0,
    AT: 7.18,
    GreenGrid: true,
  },
  {
    id: 'us',
    name: 'United States of America',
    mapbounds: [
      [-171.791110603, 18.91619],
      [-66.96466, 71.3577635769],
    ],
    Employees: 99,
    peEM: 3.2438383838383835,
    totEM: 321.14,
    Electricity: 86.26,
    Ref: 0,
    Fleet: 0,
    AT: 234.89,
  },
  {
    id: 'uz',
    name: 'Uzbekistan',
    mapbounds: [
      [55.9289172707, 37.1449940049],
      [73.055417108, 45.5868043076],
    ],
    Employees: 0,
    peEM: 0,
    totEM: 1.25,
    Electricity: 1.25,
    Ref: 0,
    Fleet: 0,
    AT: 0,
  },
  {
    id: 've',
    name: 'Venezuela',
    mapbounds: [
      [-73.3049515449, 0.724452215982],
      [-59.7582848782, 12.1623070337],
    ],
    Employees: 124,
    peEM: 1.7246774193548386,
    totEM: 213.85999999999999,
    Electricity: 48.410000000000004,
    Ref: 11.63,
    Fleet: 106.91,
    AT: 46.97,
    GreenGrid: true,
  },
  {
    id: 'ye',
    name: 'Yemen',
    mapbounds: [
      [42.6048726743, 12.5859504257],
      [53.1085726255, 19.0000033635],
    ],
    Employees: 283,
    peEM: 4.22,
    totEM: 1194.26,
    Electricity: 254.94,
    Ref: 11.98,
    Fleet: 23.58,
    AT: 903.7700000000001,
  },
  {
    id: 'za',
    name: 'South Africa',
    mapbounds: [
      [16.3449768409, -34.8191663551],
      [32.830120477, -22.0913127581],
    ],
    Employees: 172,
    peEM: 4.833023255813953,
    totEM: 831.28,
    Electricity: 387.69,
    Ref: 10.84,
    Fleet: 51.42,
    AT: 381.33,
  },
  {
    id: 'zm',
    name: 'Zambia',
    mapbounds: [
      [21.887842645, -17.9612289364],
      [33.4856876971, -8.23825652429],
    ],
    Employees: 101,
    peEM: 1.7309900990099008,
    totEM: 174.82999999999998,
    Electricity: 51.77,
    Ref: 0.96,
    Fleet: 117.15,
    AT: 4.96,
    GreenGrid: true,
  },
  {
    id: 'zw',
    name: 'Zimbabwe',
    mapbounds: [
      [25.2642257016, -22.2716118303],
      [32.8498608742, -15.5077869605],
    ],
    Employees: 42,
    peEM: 3.8964285714285714,
    totEM: 163.65,
    Electricity: 83.06,
    Ref: 3.66,
    Fleet: 67.50999999999999,
    AT: 9.41,
  },
];
export default countries;