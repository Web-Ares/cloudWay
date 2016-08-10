<?php
$filterData = $_GET['filterData'];

$json_data = '{
                "items": [
                    {
                        "pic": "pic/customers-logo16.png",
                        "link": "#"
                    },
                    {
                        "pic": "pic/customers-logo15.png",
                        "link": "#"
                    },
                    {
                        "pic": "pic/customers-logo14.png",
                        "link": "#"
                    },
                    {
                        "pic": "pic/customers-logo13.png",
                        "link": "#"
                    },
                    {
                        "pic": "pic/customers-logo12.png",
                        "link": "#"
                    },
                    {
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