const vreme = {
    "tempUnit": "C",
    "windSpeedUnit": "m/s",
    "days": [
        {"day": "Mondey", "temp": 22, "windDirection": "east", "windSpeed": 10, "type": "sunny"},
        {"day": "Tuesday", "temp": 14, "windDirection": "north-west", "windSpeed": 14, "type": "rainy"},
        {"day": "Wednesday", "temp": 17, "windDirection": "south-east", "windSpeed": 20, "type": "cloudy"},
        {"day": "Thursday", "temp": 13, "windDirection": "north-east", "windSpeed": 16, "type": "rainy"},
        {"day": "Friday", "temp": 19, "windDirection": "west", "windSpeed": 18, "type": "cloudy"},
        {"day": "Saturday", "temp": 24, "windDirection": "south-west", "windSpeed": 17, "type": "sunny"},
        {"day": "Sunday", "temp": 26, "windDirection": "south", "windSpeed": 11, "type": "sunny"}
    ]
}


var tempUnit = "C";
var windSpeedUnit = "m/s";

const CtoK = 273.15;
const MStoKMH = 3.6;

var dayIndex = -1;

function loadData() {
    var list = document.getElementById("myList");
    var vrste = "";
    var i;
    for (i = 0; i < vreme.days.length; i++)
    {
        var vrednost = vreme.days[i].day;
        vrste += "<li class='day_list_item' onclick='selectDay(" + i + ")'><a href='#'>";
        vrste += vrednost + "</a></li>";
    }
    list.innerHTML = vrste;
    
    selectDay(0);
}

function getTemp(t)
{
    if(tempUnit === vreme.tempUnit)
        return t;
    return  t + CtoK;
}

function getSpeed(v)
{
    if(windSpeedUnit === vreme.windSpeedUnit)
        return v;
    return v * MStoKMH;
}

function setSelectedDay()
{
    days_li = document.getElementsByClassName("day_list_item");
    for (var i = 0; i < days_li.length; i++) {
        days_li[i].setAttribute("class","day_list_item");
    }

    if(dayIndex !== -1 && dayIndex < days_li.length)
    {
        days_li[dayIndex].setAttribute("class","day_list_item active");
    }
}

function selectDay(i)
{
    dayIndex = i;
    var dan = vreme.days[i];
    document.getElementById("title").innerHTML = "Day: " + dan.day;
    document.getElementById("temperatura").innerHTML = "Temperature: " + getTemp(dan.temp) + "  &deg" + tempUnit;

    if (vreme.days[i].windDirection === 'north-east')
    {
        document.getElementById("x").src = "images/north_east_arrow.png";
    } else if (vreme.days[i].windDirection === 'north-west')
    {
        document.getElementById("x").src = "images/north_west_arrow.png";
    } else if (vreme.days[i].windDirection === 'south-west')
    {
        document.getElementById("x").src = "images/south_west_arrow.png";
    } else if (vreme.days[i].windDirection === 'south-east')
    {
        document.getElementById("x").src = "images/south_east_arrow.png";
    } else if (vreme.days[i].windDirection === 'north')
    {
        document.getElementById("x").src = "images/north.png";
    } else if (vreme.days[i].windDirection === 'south')
    {
        document.getElementById("x").src = "images/south.png";
    } else if (vreme.days[i].windDirection === 'west')
    {
        document.getElementById("x").src = "images/west.png";
    } else
    {
        document.getElementById("x").src = "images/east.png";
    }
    document.getElementById("jacina").innerHTML = "Wind speed: " + getSpeed(dan.windSpeed) + " " + windSpeedUnit;
    if (dan.type === "rainy")
    {
        document.getElementById("listaPodataka").style.backgroundImage = 'url("images/rb.jpg")';
    } else if (dan.type === "sunny")
    {
        document.getElementById("listaPodataka").style.backgroundImage = 'url("images/sb.jpg")';
    } else
    {
        document.getElementById("listaPodataka").style.backgroundImage = 'url("images/cb.jpg")';
    }
    
    setSelectedDay();
}

function changeTemperature(newTempUnit)
{
    tempUnit = newTempUnit;
    
    tu_c = document.getElementById("tu_c");
    tu_k = document.getElementById("tu_k");
    
    if(tempUnit === 'C')
    {
        tu_c.setAttribute("class","active");
        tu_k.setAttribute("class","");
    }
    else
    {
        tu_k.setAttribute("class","active");
        tu_c.setAttribute("class","");
    }
    selectDay(dayIndex);
    
}

function changeWindSpeed(newWindSpeedUnit)
{
    windSpeedUnit = newWindSpeedUnit;
    
    wsu_ms = document.getElementById("wsu_ms");
    wsu_kmh = document.getElementById("wsu_kmh");
    
    if(windSpeedUnit === "m/s")
    {
        wsu_ms.setAttribute("class","active");
        wsu_kmh.setAttribute("class","");
    }
    else
    {
        wsu_kmh.setAttribute("class","active");
        wsu_ms.setAttribute("class","");
    }
    
    
    selectDay(dayIndex);
}
