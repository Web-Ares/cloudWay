<?php

$loadedCount = $_GET['loadedCount'];

if($loadedCount>=8){

    $json_data = '{
                    "has_items": 0,
                    "html": "<div class=\"services-boxes__item more-content__item hidden\" style=\"background-image: url(img/services-box-pic4.jpg)\">
                    <h2 class=\"services-boxes__title services-boxes__title_premise\">on premise Solutions</h2>
                    <div class=\"services-boxes__text\">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eleifend vehicula. Morbi pellentesque diam quis arcu pharetra sollicitudin.</p>
                    </div>
                    <a href=\"#\" class=\"services-boxes__read read-more read-more_type2\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54 54\" style=\"enable-background:new 0 0 54 54;\" xml:space=\"preserve\">
                            <g>
                                <path d=\"M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z\"/>
                                <path d=\"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z\"/>
                            </g>
                            <path d=\"M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z\"/>
                            <polygon points=\"30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27\"/>
                        </svg>
                        Read More </a>
                </div>
                <div class=\"services-boxes__item more-content__item hidden\" style=\"background-image: url(img/services-box-pic3.jpg)\">
                    <h2 class=\"services-boxes__title services-boxes__title_hybrid\">on premise Solutions</h2>
                    <div class=\"services-boxes__text\">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eleifend vehicula. Morbi pellentesque diam quis arcu pharetra sollicitudin.</p>
                    </div>
                    <a href=\"#\" class=\"services-boxes__read read-more read-more_type2\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54 54\" style=\"enable-background:new 0 0 54 54;\" xml:space=\"preserve\">
                            <g>
                                <path d=\"M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z\"/>
                                <path d=\"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z\"/>
                            </g>
                            <path d=\"M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z\"/>
                            <polygon points=\"30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27\"/>
                        </svg>
                        Read More </a>
                </div>"
}';

} else {

    $json_data = '{
                    "has_items": 1,
                    "html": "<div class=\"services-boxes__item more-content__item hidden\" style=\"background-image: url(img/services-box-pic5.jpg)\">
                    <h2 class=\"services-boxes__title services-boxes__title_premise\">on premise Solutions</h2>
                    <div class=\"services-boxes__text\">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eleifend vehicula. Morbi pellentesque diam quis arcu pharetra sollicitudin.</p>
                    </div>
                    <a href=\"#\" class=\"services-boxes__read read-more read-more_type2\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54 54\" style=\"enable-background:new 0 0 54 54;\" xml:space=\"preserve\">
                            <g>
                                <path d=\"M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z\"/>
                                <path d=\"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z\"/>
                            </g>
                            <path d=\"M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z\"/>
                            <polygon points=\"30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27\"/>
                        </svg>
                        Read More </a>
                </div>
                <div class=\"services-boxes__item more-content__item hidden\" style=\"background-image: url(img/services-box-pic6.jpg)\">
                    <h2 class=\"services-boxes__title services-boxes__title_premise\">on premise Solutions</h2>
                    <div class=\"services-boxes__text\">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eleifend vehicula. Morbi pellentesque diam quis arcu pharetra sollicitudin.</p>
                    </div>
                    <a href=\"#\" class=\"services-boxes__read read-more read-more_type2\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54 54\" style=\"enable-background:new 0 0 54 54;\" xml:space=\"preserve\">
                            <g>
                                <path d=\"M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z\"/>
                                <path d=\"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z\"/>
                            </g>
                            <path d=\"M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z\"/>
                            <polygon points=\"30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27\"/>
                        </svg>
                        Read More </a>
                </div>
                <div class=\"services-boxes__item more-content__item hidden\" style=\"background-image: url(img/services-box-pic1.jpg)\">
                    <h2 class=\"services-boxes__title services-boxes__title_premise\">on premise Solutions</h2>
                    <div class=\"services-boxes__text\">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eleifend vehicula. Morbi pellentesque diam quis arcu pharetra sollicitudin.</p>
                    </div>
                    <a href=\"#\" class=\"services-boxes__read read-more read-more_type2\">
                        <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54 54\" style=\"enable-background:new 0 0 54 54;\" xml:space=\"preserve\">
                            <g>
                                <path d=\"M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0C53,41.359,41.359,53,27,53z\"/>
                                <path d=\"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z\"/>
                            </g>
                            <path d=\"M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z\"/>
                            <polygon points=\"30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27\"/>
                        </svg>
                        Read More </a>
                </div>"
}';

}

$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>