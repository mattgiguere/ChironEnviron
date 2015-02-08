# ChironEnviron
####The Repository for the [CHIRON Environment Page](http://chiron.astro.yale.edu/environment). 

The CHIRON Environment Page is built upon the [Bootstrap](http://getbootstrap.com) framework with the time series plot created using [d3.js](http://d3js.org), which connects to the [chirondb](https://github.com/mattgiguere/chirondb) MySQL database via PHP.
There are 18 sensors monitoring the environment of the instrument. Shell
scripts are used to collect this data and rsync it from Chile. Each
day at 11:10 am ET a LaunchDaemon script calls on a
python routine that writes the sensor data from the past 24 hours
to the database for your viewing pleasure.

[CHIRON](http://www.ctio.noao.edu/noao/content/CHIRON)
is a fiber fed high resolution spectrometer located
on the 1.5 m telescope at the 
[Cerro Tololo Interamerican Observatory (CTIO)](http://www.ctio.noao.edu/noao/) 
in Chile.

