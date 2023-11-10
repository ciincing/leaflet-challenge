# leaflet-challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Part 1: Create the Earthquake Visualization
![image](https://github.com/ciincing/leaflet-challenge/assets/130705911/d722c4f4-e443-4827-8b64-820168493561)

My initial assignment was to visualize an earthquake dataset. I completed the following steps:
1. I got my dataset by following these steps:
- The USGS provided earthquake data in various formats, updated every 5 minutes. I visited the USGS GeoJSON FeedLinks external site. page and chose a dataset to visualize. The following image was an example screenshot of what appeared when I visited this link:
![image](https://github.com/ciincing/leaflet-challenge/assets/130705911/fca36a38-85bf-48af-9202-ecb8b5e7af20)

- When I clicked on a dataset, like "All Earthquakes from the Past 7 Days," I was given a JSON representation of that data. I used the URL of this JSON to pull in the data for the visualization. The following image was a sampling of earthquake data in JSON format.
![image](https://github.com/ciincing/leaflet-challenge/assets/130705911/8f10567c-054a-4638-948f-14b81b7eb255)

2. Import and visualize the data by doing the following:

- Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
    - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
    - Hint: The depth of the earth can be found as the third coordinate for each earthquake.
- Include popups that provide additional information about the earthquake when its associated marker is clicked.
- Create a legend that will provide context for your map data.
- Your visualization should look something like the preceding map.
