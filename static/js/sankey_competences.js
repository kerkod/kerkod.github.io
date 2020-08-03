 
 
var option = {
    series: {
        type: 'sankey',
        layout: 'none',
        layoutIterations: 0,
        nodeAlign: 'left',
        focusNodeAdjacency: 'allEdges',
        nodeGap: 10,
        data: 
        

        [
  {
    "name": "Développement",
    "label": {
      "show": true,
      "color": "#333",
      "fontWeight": "bold"
    }
  },
  {
    "name": "DevOps",
    "label": {
      "show": true,
      "color": "#333",
      "fontWeight": "bold"
    }
  },
  {
    "name": "Algorithmie",
    "label": {
      "show": true,
      "color": "#333",
      "fontWeight": "bold"
    }
  },
  {
    "name": "Méthodologie",
    "label": {
      "show": true,
      "color": "#333",
      "fontWeight": "bold"
    }
  },
  {
    "name": "Expertise",
    "label": {
      "show": true,
      "color": "#333",
      "fontWeight": "bold"
    }
  },
  {
    "name": "PHP7 / Laravel",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "PHPUnit",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Python / Flask",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Java / Spring Boot",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "PostgreSQL",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "PostGIS",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "OSRM",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "MySQL / MariaDB",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "NodeJS / Express",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Programmation par contrainte / Choco Solver",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "API REST OpenAPI",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Cypress",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Microservices",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Wordpress",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Magento",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Ansible",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Jenkins",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Heroku",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "OVH Public Cloud",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Docker Swarm",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Linux / Debian",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Datadog",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Websocket / socket.io",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "RabbitMQ",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Eventstorming",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Git / Git flow",
    "label": {
      "show": true,
      "color": "#333"
    }
  },
  {
    "name": "Agile / Kanban / Scrum",
    "label": {
      "show": true,
      "color": "#333"
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
    "target": "Programmation par contrainte / Choco Solver",
    "value": 1
  },
  {
    "source": "Algorithmie",
    "target": "Programmation par contrainte / Choco Solver",
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
                        color: '#23b6b6'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.7
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#8A9DFF',
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.2
                    }
                }, {
                    depth: 2,
                    itemStyle: {
                        color: '#D77DFF'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }]
        
    }
};

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option);