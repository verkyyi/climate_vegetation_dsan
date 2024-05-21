var config = {
    style: 'mapbox://styles/verkyyi/clwdy9712013i01qlg4po5uvg',
    accessToken: 'pk.eyJ1IjoidmVya3l5aSIsImEiOiJjbHdiYzU5MjAwbmNoMm1udjAxOXdpbGMzIn0.PXmIdRDnfRUhe8L3AN_EfA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false, // Add an inset map in the lower left corner
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false, // Enable auto play
    title: 'The Story between Climate Change and Vegetation Cover in NBNM',
    subtitle: 'A specific research in summer indicators.',
    byline: 'For DSAN Returning Scholarship 2024 by ly**7',
    footer: `
    Source: Natural Bridges National Monument</br>
    <a href="https://github.com/verkyyi/climate_vegetation_dsan">Access Code and Datasets on Github</a>`,
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            description: `
            With the past few decades, the global climate has been changing rapidly,and the vegetation cover has been affected by this change. In this story,
            we will explore the relationship between climate change and vegetation cover in the Natural Bridges National Monument (NBNM) region.
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
            Natural Bridges National Monument is a U.S.National Monument located about 50 miles(80 km) northwest of the Four Corners boundary of southeast Utah, in the western United States, at the junction of White Canyon and Armstrong Canyon, part of the Colorado River drainage.
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
            title: 'Data Sources: 113 Locations',
            description: 'Within this dataset, there are 113 locations in the NBNM region. Each location has historical data on climate and vegetation cover. We will analyze the data to understand the relationship between climate change and vegetation cover in this region.',
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
            title: 'The Bare Percentage',
            description: `First, we will start with the Bare Percentage. As you can see from the map and the density histogram, the Bare Percentage is the most common vegetation type in the NBNM region.`,
            image: './images/bare_hist.png',
            location: {
                center: [-110.003,37.582],
                zoom: 13,
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
            alignment: 'right',
            hidden: false,
            title: 'Herb Coverage',
            description: `Then we will analyze the Herb Coverage. The center point of the map is the location with the highest Herb Coverage in the NBNM region.`,
            image:'./images/herb_hist.png',
            location: {
                center: [-109.976,37.632],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,                
            },
            mapAnimation: 'easeTo',
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
            description: `
            Next, we will analyze the Litter Coverage. Litter is the dead plant material that accumulates on the ground. There is a strong correlation between litter coverage and other vegetation cover types in the NBNM region.`,
            image: './images/litter_hist.png',
            location: {
                center: [-110.003,37.582],
                zoom: 13,
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
            description: `
            Shrubs are small to medium-sized woody plants that are an important part of the vegetation in the NBNM region.`,
            image: './images/shrub_hist.png',
            location: {
                center: [-110.033,37.599],
                zoom: 13,
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
            alignment: 'right',
            hidden: false,
            title: 'Tree Canopy Coverage',
            description: `
            Tree Canopy is the top layer of vegetation in a forest or woodland. It provides shade and habitat for many species of plants and animals in the NBNM region. The center point of the map is the location with the highest Tree Canopy Coverage in the NBNM region.`,
            image: './images/treecanopy_hist.png',
            location: {
                center: [-109.973,37.630],
                zoom: 13,
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
            title: 'Vegetation Cover stability: 1980-2020',
            description: 'As you can see from the plot, the vegetation for each location is stable over the period from 1980 to 2020, which is strange. Still, We will try to analyze the data to understand the impact of climate change based on different vegetation cover in this region.',
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
            alignment: 'left',
            hidden: false,
            title: 'Highest Summer Avg Temperature: 22.92 °C',
            description: `
            As you can see from the map, the average summer temperature in the NBNM region ranges from 20.00 °C to 22.92 °C.`,
            image:"./images/summer_temp_hist.png",
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
            alignment: 'right',
            hidden: false,
            title: 'Highest Summer Precipitation: 8.75 mm',
            description: `
            Similarly, the average summer precipitation is also stable in the NBNM region, ranging from 7.00 mm to 8.75 mm.`,
            image: "./images/summer_precip_hist.png",
            location: {
                center: [-109.977,37.632],
                zoom: 13.29,
                pitch: 60,
                bearing: 30,                
            },
            mapAnimation: 'easeTo',
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
            alignment: 'right',
            hidden: false,
            title: 'Highest Summer Volume Water Content: 0.11',
            description: `
            This attribute (column name) in the data table represents the volumetric water content in the whole soil profile during summer.`,
            image: './images/vwc_hist.png',
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
            title: 'Highest Extreme Short Term Dry Stress: 35.16',
            description: `
            This attribute in the data table represents the extreme short term dry stress for the entire soil profile in the summer.
            It is an indicator of the soil's ability to retain moisture during dry periods.`,
            image: './images/dry_stress_hist.png',
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
            id: 'comparison-temperature',
            alignment: 'right',
            hidden: false,
            title: 'Summer Temperature Difference between 1980-2020',
            description: 'The historical data shows that the average summer temperature in the NBNM region has been increasing over the period from 1980 to 2020. The number showing on each location is the temperature difference between 1980 and 2020.',
            image: './images/temp_diff_hist.png',
            location: {
                center: [-109.973,37.608],
                zoom: 13.5,
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
            description: 'Similarly, the precipitation in the NBNM region has been increasing over the period from 1980 to 2020. The number showing on each location is the precipitation difference between 1980 and 2020.',
            image: './images/precip_diff_hist.png',
            location: {
                center: [-109.973,37.608],
                zoom: 13.5,
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
            title: 'Summer Volume Water Content between 1980-2020',
            description: `Most of the locations have a zero difference.(Numbers are omitted for these locations). Other locations have slightly decreased in VWC over the period from 1980 to 2020.`,
            image: "./images/vwc_diff_hist.png",
            location: {
                center: [-109.973,37.608],
                zoom: 13.5,
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
            description: `
            As you can see from the map and the density histogram, the dry stress in the NBNM region has been decreasing over the period from 1980 to 2020. This trend match the temperature increase trend.
            `,
            image: './images/dry_stress_diff_hist.png',
            location: {
                center: [-109.973,37.608],
                zoom: 13.5,
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
            alignment: 'right',
            hidden: false,
            title: 'Correlation between Temperature and Vegetation',
            description: `
            From the correlation matrix, we can see that there is a strong positive correlation between temperature and vegetation cover in the NBNM region. Especially, the temperature(Orange Color) has a strong positive correlation with the Bare Percentage(Brown Color) and Herb Coverage.`,
            image: './images/vegetation_temperature_corr.png',
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
                    layer: 'vegetation-bare',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'temperature',
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
            title: 'Correlation between Precipitation and Vegetation',
            description: `
            Similarly, the precipitation(Blue Color) has a strong positive correlation with the Herb Percentage(Green Color)in the NBNM region.
            `,
            image: './images/vegetation_precipitation_corr.png',
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
                    layer: 'vegetation-herb',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'precipitation',
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
            title: 'Correlation between Soil and Vegetation',
            description: `
            The Volumetric Water Content(Blue Color) has a strong positive correlation with the Litter Coverage(Yellow Color) in the NBNM region.
            `,
            image: './images/vegetation_vwc_corr.png',
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
                    layer: 'vegetation-litter',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'vwc',
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
            title: 'Conclusion and Future Research',
            description: `
            Based on the analysis of historical data, we can see that there is a strong relationship between climate change and vegetation cover in the NBNM region.</br>

            1. The temperature has been increasing over the period from 1980 to 2020, which has a strong positive correlation with the Bare Percentage and Herb Coverage.</br>

            2. The precipitation has been increasing over the period from 1980 to 2020, which has a strong positive correlation with the Herb Percentage.</br>

            3. The Volumetric Water Content has a strong positive correlation with the Litter Coverage.</br>

            </br>

            Possible Future Research:</br>
            1. Fix the data quality issue which the vegetation cover should not be stable over the period from 1980 to 2020.</br>
            2. Analyze the impact of climate change on vegetation cover in other regions.</br>
            3. Explore the impact of other climate indicators on vegetation cover.</br>

            `,
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
        },
        {
            id: 'references',
            alignment: 'center',
            hidden: false,
            title: 'References',
            description: `
            1. <a href="https://jpj.georgetown.domains/2024-scholarship/drive.html">Datasets folder from Returning Scholarship</a> </br>
            2. <a href="https://en.wikipedia.org/wiki/Natural_Bridges_National_Monument">Natural Bridges National Monument (NBNM) from Wikipedia</a></br>
            3. <a href="https://github.com/mapbox/storytelling">Storytelling Template</a></br>
            `,
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
