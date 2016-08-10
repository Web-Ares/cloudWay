<?php
$filterData = $_GET['filterData'];

$json_data = '{
                "items": [
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share Point", "Hardware", "Gateway"],
                        "pic": "pic/customers-logo16.png",
                        "link": "#"
                    },
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share", "Hardware", "Point"],
                        "pic": "pic/customers-logo15.png",
                        "link": "#"
                    },
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share Point", "Gateway"],
                        "pic": "pic/customers-logo14.png",
                        "link": "#"
                    },
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share Point", "Hardware", "Gateway"],
                        "pic": "pic/customers-logo13.png",
                        "link": "#"
                    },
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share Point", "Hardware", "Gateway"],
                        "pic": "pic/customers-logo12.png",
                        "link": "#"
                    },
                    {
                        "text": "Share Point Implementation And Support",
                        "time": "June 2016",
                        "datetime": "2016-06-01",
                        "types": ["Share Point", "Hardware", "Gateway"],
                        "pic": "pic/customers-logo11.png",
                        "link": "#"
                    }
                ]
              }';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>