 
 
var option = {
    series: {
        type: 'sankey',
        layout: 'none',
        layoutIterations: 0,
        nodeAlign: 'left',
        focusNodeAdjacency: 'allEdges',
        nodeGap: 10,
        left: '12%',
        animation: false,
        data: 
        

        [
  {
    "name": "Développement",
    "label": {
      "show": true,
      "color": "#FFF",
      "position": "left"
    }
  },
  {
    "name": "DevOps",
    "label": {
      "show": true,
      "color": "#FFF",
      "position": "left"
    }
  },
  {
    "name": "Algorithmie",
    "label": {
      "show": true,
      "color": "#FFF",
      "position": "left"
    }
  },
  {
    "name": "Méthodologie",
    "label": {
      "show": true,
      "color": "#FFF",
      "position": "left"
    }
  },
  {
    "name": "Expertise",
    "label": {
      "show": true,
      "color": "#FFF",
      "position": "left"
    }
  },
  {
    "name": "PHP7 / Laravel",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "PHPUnit",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Python / Flask",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Java / Spring Boot",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "PostgreSQL",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "PostGIS",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "OSRM",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "MySQL / MariaDB",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "NodeJS / Express",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Programmation par contrainte",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "API REST OpenAPI",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Cypress",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Microservices",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Wordpress",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Magento",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Ansible",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Jenkins",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Heroku",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "OVH Public Cloud",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Docker Swarm",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Linux / Debian",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Datadog",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Websocket / socket.io",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "RabbitMQ",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Eventstorming",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Git / Git flow",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  },
  {
    "name": "Agile / Kanban / Scrum",
    "label": {
      "show": true,
      "color": "#FAFAFA"
    }
  }
]
        
        ,
        links: 
        
   [
  {
    "source": "Développement",
    "target": "PHP7 / Laravel",
    "value": 3
  },
  {
    "source": "Algorithmie",
    "target": "PHP7 / Laravel",
    "value": 2
  },
  {
    "source": "Expertise",
    "target": "PHP7 / Laravel",
    "value": 3
  },
  {
    "source": "Développement",
    "target": "PHPUnit",
    "value": 1
  },
  {
    "source": "Méthodologie",
    "target": "PHPUnit",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "Python / Flask",
    "value": 2
  },
  {
    "source": "Algorithmie",
    "target": "Python / Flask",
    "value": 1
  },
  {
    "source": "DevOps",
    "target": "Python / Flask",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "Java / Spring Boot",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "PostgreSQL",
    "value": 3
  },
  {
    "source": "Développement",
    "target": "PostGIS",
    "value": 2
  },
  {
    "source": "Algorithmie",
    "target": "PostGIS",
    "value": 2
  },
  {
    "source": "Algorithmie",
    "target": "OSRM",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "MySQL / MariaDB",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "NodeJS / Express",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "Programmation par contrainte",
    "value": 1
  },
  {
    "source": "Algorithmie",
    "target": "Programmation par contrainte",
    "value": 3
  },
  {
    "source": "Développement",
    "target": "API REST OpenAPI",
    "value": 2
  },
  {
    "source": "Méthodologie",
    "target": "API REST OpenAPI",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "Cypress",
    "value": 1
  },
  {
    "source": "Méthodologie",
    "target": "Cypress",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "Microservices",
    "value": 3
  },
  {
    "source": "Méthodologie",
    "target": "Microservices",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "Wordpress",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "Magento",
    "value": 1
  },
  {
    "source": "DevOps",
    "target": "Ansible",
    "value": 3
  },
  {
    "source": "Expertise",
    "target": "Ansible",
    "value": 3
  },
  {
    "source": "DevOps",
    "target": "Jenkins",
    "value": 2
  },
  {
    "source": "Expertise",
    "target": "Jenkins",
    "value": 3
  },
  {
    "source": "DevOps",
    "target": "Heroku",
    "value": 1
  },
  {
    "source": "DevOps",
    "target": "OVH Public Cloud",
    "value": 2
  },
  {
    "source": "DevOps",
    "target": "Docker Swarm",
    "value": 3
  },
  {
    "source": "Expertise",
    "target": "Docker Swarm",
    "value": 3
  },
  {
    "source": "DevOps",
    "target": "Linux / Debian",
    "value": 2
  },
  {
    "source": "Expertise",
    "target": "Linux / Debian",
    "value": 1
  },
  {
    "source": "DevOps",
    "target": "Datadog",
    "value": 2
  },
  {
    "source": "Développement",
    "target": "Websocket / socket.io",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "RabbitMQ",
    "value": 1
  },
  {
    "source": "Méthodologie",
    "target": "Eventstorming",
    "value": 1
  },
  {
    "source": "Développement",
    "target": "Git / Git flow",
    "value": 1
  },
  {
    "source": "Méthodologie",
    "target": "Git / Git flow",
    "value": 1
  },
  {
    "source": "Méthodologie",
    "target": "Agile / Kanban / Scrum",
    "value": 3
  }
]

    ,
    levels: [{
                    depth: 0,
                    itemStyle: {
                        color: '#c251ff',
                        borderWidth: 0.5
                    },
                    lineStyle: {
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 1,
                          y2: 0,
                          colorStops: [{
                              offset: 0, color: '#c251ff' // color at 0% position
                          }, {
                              offset: 1, color: '#6f00ff' // color at 100% position
                          }],
                          global: false // false by default
                      },
                        opacity: 0.9
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#6f00ff',
                        borderWidth: 0.5
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.2
                    }
                }]
        
    }
};

var myChart = echarts.init(document.getElementById('sankey_competences'));
myChart.setOption(option);
