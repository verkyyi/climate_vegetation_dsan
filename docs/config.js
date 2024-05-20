var config = {
    style: 'mapbox://styles/verkyyi/clwdy9712013i01qlg4po5uvg',
    accessToken: 'pk.eyJ1IjoidmVya3l5aSIsImEiOiJjbHdiYzU5MjAwbmNoMm1udjAxOXdpbGMzIn0.PXmIdRDnfRUhe8L3AN_EfA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'The Story between Climate Change and Vegetation Cover in NBNM',
    subtitle: 'A specific research in summer indicators.',
    byline: 'For DSAN Returning Scholarship 2024 by ly**7',
    footer: 'Created using<a href = "https://github.com/mapbox/storytelling" target = "_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            description: `
            Wiin the past few decades, the global climate has been changing rapidly, and the vegetation cover has been affected by this change. In this story, we will explore the relationship between climate change and vegetation cover in the Natural Bridges National Monument (NBNM) region. We will use the historical data of the NBNM region to analyze the impact of climate change on vegetation cover and predict the future trend of vegetation cover in this region.
            `,
            location: {
                center: [-110.0472, 37.60413],
                zoom: 3,
                pitch: 15,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [       
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'intro-nbnm',
            alignment: 'right',
            hidden: false,
            title: 'Natural Bridges National Monument',
            image: './images/Owachomo_laban.jpg',
            description: `
            Natural Bridges National Monument is a U.S.National Monument located about 50 miles(80 km) northwest of the Four Corners boundary of southeast Utah, in the western United States, at the junction of White Canyon and Armstrong Canyon, part of the Colorado River drainage.It features the thirteenth largest natural bridge in the world, [4] carved from the white Permian sandstone of the Cedar Mesa Formation that gives White Canyon its name.
            <br>
            Our journey starts from here, exploring the relationship between climate change and vegetation cover in this region.
            `,
            location: {
                center: [-110.0472, 37.60413],
                zoom: 8,
                pitch: 10,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [ 
            ]
        },
        {
            id: 'summary-locations',
            alignment: 'left',
            hidden: false,
            title: '113 Locations',
            description: 'Within this dataset, there are 113 locations in the NBNM region. Each location has historical data on climate and vegetation cover. We will analyze the data to understand the relationship between climate change and vegetation cover in this region.',
            location: {
                center: [-110.0472, 37.60413],
                zoom: 12,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'locations',
                    opacity: 1,
                }                
            ],
            onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0,
                }                 
            ]
        },
        {
            id: 'summary-vegetation-bare',
            alignment: 'left',
            hidden: false,
            title: 'Barren Land Coverage',
            description: 'The vegetation cover in the NBNM region is diverse and includes various types of vegetation, such as shrubs, grasses, and trees. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            location: {
                center: [-110.003,37.582],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-bare',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-bare-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-bare',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-bare-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'summary-vegetation-herb',
            alignment: 'left',
            hidden: false,
            title: 'Herb Coverage',
            description: 'The vegetation cover in the NBNM region is diverse and includes various types of vegetation, such as shrubs, grasses, and trees. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            location: {
                center: [-109.976,37.632],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-herb',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-herb-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-herb',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-herb-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'summary-vegetation-litter',
            alignment: 'left',
            hidden: false,
            title: 'Litter Coverage',
            description: 'The vegetation cover in the NBNM region is diverse and includes various types of vegetation, such as shrubs, grasses, and trees. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            location: {
                center: [-109.969,37.635],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-litter',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-litter-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-litter',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-litter-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'summary-vegetation-shrub',
            alignment: 'left',
            hidden: false,
            title: 'Shrub Coverage',
            description: 'The vegetation cover in the NBNM region is diverse and includes various types of vegetation, such as shrubs, grasses, and trees. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            location: {
                center: [-110.033,37.599],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-shrub',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-shrub-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-shrub',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-shrub-highest',
                    opacity: 0,
                }
            ]
        }, 
        {
            id: 'summary-vegetation-treecanopy',
            alignment: 'left',
            hidden: false,
            title: 'Tree Canopy Coverage',
            description: 'The vegetation cover in the NBNM region is diverse and includes various types of vegetation, such as shrubs, grasses, and trees. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            location: {
                center: [-109.973,37.630],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-treecanopy',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-treecanopy-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-treecanopy',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-treecanopy-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'summary-vegetation',
            alignment: 'left',
            hidden: false,
            title: 'Summary of Vegetation Cover',
            description: 'Here we show all the vegetation cover types in the NBNM region. We will analyze the data to identify the dominant vegetation types and their distribution in this region.',
            image: './images/vegetation_stablility.png',
            location: {
                center: [-110.0472, 37.60413],
                zoom: 12,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vegetation-treecanopy',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-shrub',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-litter',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-bare',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vegetation-treecanopy',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-shrub',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-litter',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-bare',
                    opacity: 0,
                }
            ]
        }, 
        {
            id: 'location-hottest',
            alignment: 'right',
            hidden: false,
            title: 'Hottest Summer: 24.55 Celsius',
            description: 'The hottest locations in the NBNM region are marked in red on the map. These locations have the highest average temperature over the period from 1980 to 2020. We will analyze the data from these locations to understand the impact of temperature on vegetation cover in this region.',
            location: {
                center: [-110.044,37.602],
                zoom: 13.29,
                pitch: 60,
                bearing: 30,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'temperature',
                    opacity: 1,
                },
                {
                    layer: 'temperature-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'temperature',
                    opacity: 0,
                },
                {
                    layer: 'temperature-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'location-highest-precipitation',
            alignment: 'left',
            hidden: false,
            title: 'Highest Precipitation: 0.0001 mm',
            description: 'The Highest Precipitation locations in the NBNM region are marked in blue on the map. These locations have the highest average precipitation over the period from 1980 to 2020. We will analyze the data from these locations to understand the impact of precipitation on vegetation cover in this region.',
            location: {
                center: [-109.977,37.632],
                zoom: 13.29,
                pitch: 60,
                bearing: 30,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'precipitation',
                    opacity: 1,
                },
                {
                    layer: 'precipitation-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'precipitation',
                    opacity: 0,
                },
                {
                    layer: 'precipitation-highest',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'location-vwc',
            alignment: 'left',
            hidden: false,
            title: 'VWC: 0.0001',
            description: 'The Highest Precipitation locations in the NBNM region are marked in blue on the map. These locations have the highest average precipitation over the period from 1980 to 2020. We will analyze the data from these locations to understand the impact of precipitation on vegetation cover in this region.',
            location: {
                center: [-109.969,37.621],
                zoom: 13.29,
                pitch: 60,
                bearing: 30,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vwc',
                    opacity: 1,
                },
                {
                    layer: 'vwc-highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vwc',
                    opacity: 0,
                },
                {
                    layer: 'vwc-highest',
                    opacity: 0,
                }
            ]
        },         
        {
            id: 'location-dry-stress',
            alignment: 'left',
            hidden: false,
            title: 'Dry Stress: 0.0001',
            description: 'The Highest Precipitation locations in the NBNM region are marked in blue on the map. These locations have the highest average precipitation over the period from 1980 to 2020. We will analyze the data from these locations to understand the impact of precipitation on vegetation cover in this region.',
            location: {
                center: [-110.042,37.602],
                zoom: 13.29,
                pitch: 60,
                bearing: 30,                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dry_stress',
                    opacity: 1,
                },
                {
                    layer: 'dry_stress_highest',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'dry_stress',
                    opacity: 0,
                },
                {
                    layer: 'dry_stress_highest',
                    opacity: 0,
                }
            ]
        },  
        {
            id: 'summary-daterange',
            alignment: 'right',
            hidden: false,
            title: '1980-2020',
            description: 'The historical data covers the period from 1980 to 2020. We will analyze the data to identify trends and patterns in climate and vegetation cover over this period.',
            location: {
                center: [-109.973,37.608],
                zoom: 13,
                pitch: 45,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'comparison-temperature',
            alignment: 'right',
            hidden: false,
            title: 'Summer Temperature between 1980-2020',
            description: 'The historical data shows that the average summer temperature in the NBNM region has been increasing over the period from 1980 to 2020. We will analyze the data to understand the impact of temperature on vegetation cover in this region.',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'temperature',
                    opacity: 1,
                },
                {
                    layer: 'comparision-temp',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-temp',
                    opacity: 0,
                },
                {
                    layer: 'temperature',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'comparison-ppt',
            alignment: 'right',
            hidden: false,
            title: 'Summer Precipitation between 1980-2020',
            description: 'The historical data shows that the average summer precipitation in the NBNM region has been increasing over the period from 1980 to 2020. We will analyze the data to understand the impact of precipitation on vegetation cover in this region.',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'precipitation',
                    opacity: 1,
                },
                {
                    layer: 'comparision-ppt',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-ppt',
                    opacity: 0,
                },
                {
                    layer: 'precipitation',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'comparison-vwc',
            alignment: 'right',
            hidden: false,
            title: 'VWC between 1980-2020',
            description: 'The historical data shows that the average summer VWC in the NBNM region has been increasing over the period from 1980 to 2020. We will analyze the data to understand the impact of VWC on vegetation cover in this region.',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vwc',
                    opacity: 1,
                },
                {
                    layer: 'comparision-vwc',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-vwc',
                    opacity: 0,
                },
                {
                    layer: 'vwc',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'comparison-dry-stress',
            alignment: 'right',
            hidden: false,
            title: 'Dry Stress between 1980-2020',
            description: 'The historical data shows that the average summer Dry Stress in the NBNM region has been increasing over the period from 1980 to 2020. We will analyze the data to understand the impact of Dry Stress on vegetation cover in this region.',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dry_stress',
                    opacity: 1,
                },
                {
                    layer: 'comparision-dry-stress',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-dry-stress',
                    opacity: 0,
                },
                {
                    layer: 'dry_stress',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'insights-corelation-temperature',
            alignment: 'left',
            hidden: false,
            title: 'Corelation between Temperature and Vegetation',
            description: 'The historical data shows that there is a strong correlation between climate and vegetation cover in the NBNM region. We will analyze the data to identify the relationship between temperature, precipitation, VWC, and Dry Stress on vegetation cover in this region.',
            image: './images/correlation_temperature.png',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'comparision-temp',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-bare',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-temp',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-bare',
                    opacity: 0,
                }                
            ]
        },
        {
            id: 'insights-corelation-ppt',
            alignment: 'right',
            hidden: false,
            title: 'Corelation between Percipitation and Vegetation',
            description: 'The historical data shows that there is a strong correlation between climate and vegetation cover in the NBNM region. We will analyze the data to identify the relationship between temperature, precipitation, VWC, and Dry Stress on vegetation cover in this region.',
            image: './images/correlation_ppt.png',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'comparision-ppt',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-ppt',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'insights-corelation-soil',
            alignment: 'left',
            hidden: false,
            title: 'Corelation between Soil and Vegetation',
            description: 'The historical data shows that there is a strong correlation between climate and vegetation cover in the NBNM region. We will analyze the data to identify the relationship between temperature, precipitation, VWC, and Dry Stress on vegetation cover in this region.',
            image: './images/correlation_soil.png',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'comparision-dry-stress',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-dry-stress',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-herb',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'insights-corelation-vwc',
            alignment: 'right',
            hidden: false,
            title: 'Corelation between Soil and Vegetation',
            description: 'The historical data shows that there is a strong correlation between climate and vegetation cover in the NBNM region. We will analyze the data to identify the relationship between temperature, precipitation, VWC, and Dry Stress on vegetation cover in this region.',
            image: './images/correlation_vwc.png',
            location: {
                center: [-109.973,37.608],
                zoom: 12,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'comparision-vwc',
                    opacity: 1,
                },
                {
                    layer: 'vegetation-litter',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'comparision-vwc',
                    opacity: 0,
                },
                {
                    layer: 'vegetation-litter',
                    opacity: 0,
                }
            ]
        },      
        {
            id: 'final-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion',
            description: 'Based on the analysis of historical data, we can see that there is a strong relationship between climate change and vegetation cover in the NBNM region. The data shows that as temperature and precipitation increase, vegetation cover also increases. This indicates that climate change has a significant impact on vegetation cover in this region. By analyzing the historical data and predicting future trends, we can better understand the impact of climate change on vegetation cover and take steps to mitigate its effects.',
            location: {
                center: [-110.0472, 37.60413],
                zoom: 3,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
