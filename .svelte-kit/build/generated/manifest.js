const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/about.svx"),
	() => import("../../../src/routes/notes/__layout.svelte"),
	() => import("../../../src/routes/notes/2020-11-04-firecracker-salmon-and-cauliflower-rice.svx"),
	() => import("../../../src/routes/notes/2020-08-27-Boundary-Supply-Prima-system-support.svx"),
	() => import("../../../src/routes/notes/2020-08-31-Getting-better-with-the-Drone.svx"),
	() => import("../../../src/routes/notes/2020-08-22--A-Taxi-Driver-Korean-.svx"),
	() => import("../../../src/routes/notes/2020-09-02-The-Rhine-River.svx"),
	() => import("../../../src/routes/notes/2020-08-22-Bought-a-drone.svx"),
	() => import("../../../src/routes/notes/2020-08-22-Awesome-Sites.svx"),
	() => import("../../../src/routes/notes/2020-08-28-Webmentions.svx"),
	() => import("../../../src/routes/notes/2020-11-23-Fall-Leaves.svx"),
	() => import("../../../src/routes/notes/2020-12-05-wild-horses.svx"),
	() => import("../../../src/routes/notes/2021-01-07-still-human.svx"),
	() => import("../../../src/routes/notes/2020-08-29-Rainy-days.svx"),
	() => import("../../../src/routes/notes/2020-11-29-utrecht.svx"),
	() => import("../../../src/routes/notes/2021-01-10-street.svx"),
	() => import("../../../src/routes/notes/2020-08-25-Minio.svx"),
	() => import("../../../src/routes/notes/2020-11-24-Fall.svx"),
	() => import("../../../src/routes/notes.svelte"),
	() => import("../../../src/routes/trips/__layout.svelte"),
	() => import("../../../src/routes/trips/egypt-2009/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-twenty-twenty-eight/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-eighteen-nineteen/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-sixteen-seventeen/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-twelve-fifteen/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-nine-eleven/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-one-six/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-eight/index.svelte"),
	() => import("../../../src/routes/trips/usa-2011/day-seven/index.svelte"),
	() => import("../../../src/routes/trips/usa-2012/index.svelte"),
	() => import("../../../src/routes/trips/usa-2012/day-one-seven.svelte"),
	() => import("../../../src/routes/trips/usa-2012/day-eight.svelte"),
	() => import("../../../src/routes/trips.svelte"),
	() => import("../../../src/routes/blog/__layout.svelte"),
	() => import("../../../src/routes/blog/2021-04-20-remote-uploads-with-pre-signed-urls-on-scaleway-object-storage.svx"),
	() => import("../../../src/routes/blog/2019-04-23-extending-existing-functionality-in-rust-with-traits-in-rust.svx"),
	() => import("../../../src/routes/blog/2020-08-17-identifying-and-resolving-a-kafka-issue-with-appsignal.svx"),
	() => import("../../../src/routes/blog/2018-12-04-dont-be-mean-statistical-means-and-percentiles-101.svx"),
	() => import("../../../src/routes/blog/2014-03-31-mongodb-mongoid-and-sideiq-connection-problems.svx"),
	() => import("../../../src/routes/blog/2019-03-09-resize-images-from-s3-with-aws-lambda-and-rust.svx"),
	() => import("../../../src/routes/blog/2020-08-28-upload-to-presigned-aws-url-with-rest-client.svx"),
	() => import("../../../src/routes/blog/2019-02-12-replica-set-lag-monitoring-with-appsignal.svx"),
	() => import("../../../src/routes/blog/2011-05-21-how-to-control-an-rc-car-with-an-arduino.svx"),
	() => import("../../../src/routes/blog/2016-07-04-monitor-mongodb-load-with-custom-metrics.svx"),
	() => import("../../../src/routes/blog/2020-08-27-iawriter-micropub-netlify-static-site.svx"),
	() => import("../../../src/routes/blog/2017-11-13-track-cache-hits-with-custom-metrics.svx"),
	() => import("../../../src/routes/blog/2014-01-07-realtime-mongodb-with-aggregations.svx"),
	() => import("../../../src/routes/blog/2018-06-10-apollo-query-batching-and-graphql.svx"),
	() => import("../../../src/routes/blog/2019-10-12-3d-printed-plant-watering-system.svx"),
	() => import("../../../src/routes/blog/2011-12-04-a-trakt-tv-siri-proxy-plugin.svx"),
	() => import("../../../src/routes/blog/2013-07-30-taming-mongodb-disk-usage.svx"),
	() => import("../../../src/routes/blog/2018-07-03-custom-exceptions-in-ruby.svx"),
	() => import("../../../src/routes/blog/2018-10-23-the-innards-of-a-ruby-gem.svx"),
	() => import("../../../src/routes/blog/2013-06-13-reducing-mongodb-queries.svx"),
	() => import("../../../src/routes/blog/2019-02-14-dropzone-app-stimulus-js.svx"),
	() => import("../../../src/routes/blog/2019-12-03-mailgun-europe-and-rails.svx"),
	() => import("../../../src/routes/blog/2018-04-08-fix-rx100-startup-issue.svx"),
	() => import("../../../src/routes/blog/2019-04-23-kafka-sidekiq-ruby.svx"),
	() => import("../../../src/routes/blog/2016-02-05-upgrading-mongoid.svx"),
	() => import("../../../src/routes/blog/2014-08-04-consistent-api.svx"),
	() => import("../../../src/routes/blog/2019-01-27-blog-update.svx"),
	() => import("../../../src/routes/blog.svelte"),
	() => import("../../../src/routes/uses.svx")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/about.svx
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/feeds/notes.xml.js
	[/^\/feeds\/notes\.xml$/],

	// src/routes/feeds/trips.xml.js
	[/^\/feeds\/trips\.xml$/],

	// src/routes/feeds/blog.xml.js
	[/^\/feeds\/blog\.xml$/],

	// src/routes/notes/index.json.js
	[/^\/notes\.json$/],

	// src/routes/notes/2020-11-04-firecracker-salmon-and-cauliflower-rice.svx
	[/^\/notes\/2020-11-04-firecracker-salmon-and-cauliflower-rice\/?$/, [c[0], c[4], c[5]], [c[1]]],

	// src/routes/notes/2020-08-27-Boundary-Supply-Prima-system-support.svx
	[/^\/notes\/2020-08-27-Boundary-Supply-Prima-system-support\/?$/, [c[0], c[4], c[6]], [c[1]]],

	// src/routes/notes/2020-08-31-Getting-better-with-the-Drone.svx
	[/^\/notes\/2020-08-31-Getting-better-with-the-Drone\/?$/, [c[0], c[4], c[7]], [c[1]]],

	// src/routes/notes/2020-08-22--A-Taxi-Driver-Korean-.svx
	[/^\/notes\/2020-08-22--A-Taxi-Driver-Korean-\/?$/, [c[0], c[4], c[8]], [c[1]]],

	// src/routes/notes/2020-09-02-The-Rhine-River.svx
	[/^\/notes\/2020-09-02-The-Rhine-River\/?$/, [c[0], c[4], c[9]], [c[1]]],

	// src/routes/notes/2020-08-22-Bought-a-drone.svx
	[/^\/notes\/2020-08-22-Bought-a-drone\/?$/, [c[0], c[4], c[10]], [c[1]]],

	// src/routes/notes/2020-08-22-Awesome-Sites.svx
	[/^\/notes\/2020-08-22-Awesome-Sites\/?$/, [c[0], c[4], c[11]], [c[1]]],

	// src/routes/notes/2020-08-28-Webmentions.svx
	[/^\/notes\/2020-08-28-Webmentions\/?$/, [c[0], c[4], c[12]], [c[1]]],

	// src/routes/notes/2020-11-23-Fall-Leaves.svx
	[/^\/notes\/2020-11-23-Fall-Leaves\/?$/, [c[0], c[4], c[13]], [c[1]]],

	// src/routes/notes/2020-12-05-wild-horses.svx
	[/^\/notes\/2020-12-05-wild-horses\/?$/, [c[0], c[4], c[14]], [c[1]]],

	// src/routes/notes/2021-01-07-still-human.svx
	[/^\/notes\/2021-01-07-still-human\/?$/, [c[0], c[4], c[15]], [c[1]]],

	// src/routes/notes/2020-08-29-Rainy-days.svx
	[/^\/notes\/2020-08-29-Rainy-days\/?$/, [c[0], c[4], c[16]], [c[1]]],

	// src/routes/notes/2020-11-29-utrecht.svx
	[/^\/notes\/2020-11-29-utrecht\/?$/, [c[0], c[4], c[17]], [c[1]]],

	// src/routes/notes/2021-01-10-street.svx
	[/^\/notes\/2021-01-10-street\/?$/, [c[0], c[4], c[18]], [c[1]]],

	// src/routes/notes/2020-08-25-Minio.svx
	[/^\/notes\/2020-08-25-Minio\/?$/, [c[0], c[4], c[19]], [c[1]]],

	// src/routes/notes/2020-11-24-Fall.svx
	[/^\/notes\/2020-11-24-Fall\/?$/, [c[0], c[4], c[20]], [c[1]]],

	// src/routes/notes.svelte
	[/^\/notes\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/trips/index.json.js
	[/^\/trips\.json$/],

	// src/routes/trips/egypt-2009/index.svelte
	[/^\/trips\/egypt-2009\/?$/, [c[0], c[22], c[23]], [c[1]]],

	// src/routes/trips/posts.json.js
	[/^\/trips\/posts\.json$/],

	// src/routes/trips/usa-2011/index.svelte
	[/^\/trips\/usa-2011\/?$/, [c[0], c[22], c[24]], [c[1]]],

	// src/routes/trips/usa-2011/day-twenty-twenty-eight/index.svelte
	[/^\/trips\/usa-2011\/day-twenty-twenty-eight\/?$/, [c[0], c[22], c[25]], [c[1]]],

	// src/routes/trips/usa-2011/day-eighteen-nineteen/index.svelte
	[/^\/trips\/usa-2011\/day-eighteen-nineteen\/?$/, [c[0], c[22], c[26]], [c[1]]],

	// src/routes/trips/usa-2011/day-sixteen-seventeen/index.svelte
	[/^\/trips\/usa-2011\/day-sixteen-seventeen\/?$/, [c[0], c[22], c[27]], [c[1]]],

	// src/routes/trips/usa-2011/day-twelve-fifteen/index.svelte
	[/^\/trips\/usa-2011\/day-twelve-fifteen\/?$/, [c[0], c[22], c[28]], [c[1]]],

	// src/routes/trips/usa-2011/day-nine-eleven/index.svelte
	[/^\/trips\/usa-2011\/day-nine-eleven\/?$/, [c[0], c[22], c[29]], [c[1]]],

	// src/routes/trips/usa-2011/day-one-six/index.svelte
	[/^\/trips\/usa-2011\/day-one-six\/?$/, [c[0], c[22], c[30]], [c[1]]],

	// src/routes/trips/usa-2011/day-eight/index.svelte
	[/^\/trips\/usa-2011\/day-eight\/?$/, [c[0], c[22], c[31]], [c[1]]],

	// src/routes/trips/usa-2011/day-seven/index.svelte
	[/^\/trips\/usa-2011\/day-seven\/?$/, [c[0], c[22], c[32]], [c[1]]],

	// src/routes/trips/usa-2012/index.svelte
	[/^\/trips\/usa-2012\/?$/, [c[0], c[22], c[33]], [c[1]]],

	// src/routes/trips/usa-2012/day-one-seven.svelte
	[/^\/trips\/usa-2012\/day-one-seven\/?$/, [c[0], c[22], c[34]], [c[1]]],

	// src/routes/trips/usa-2012/day-eight.svelte
	[/^\/trips\/usa-2012\/day-eight\/?$/, [c[0], c[22], c[35]], [c[1]]],

	// src/routes/trips.svelte
	[/^\/trips\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/blog/index.json.js
	[/^\/blog\.json$/],

	// src/routes/blog/2021-04-20-remote-uploads-with-pre-signed-urls-on-scaleway-object-storage.svx
	[/^\/blog\/2021-04-20-remote-uploads-with-pre-signed-urls-on-scaleway-object-storage\/?$/, [c[0], c[37], c[38]], [c[1]]],

	// src/routes/blog/2019-04-23-extending-existing-functionality-in-rust-with-traits-in-rust.svx
	[/^\/blog\/2019-04-23-extending-existing-functionality-in-rust-with-traits-in-rust\/?$/, [c[0], c[37], c[39]], [c[1]]],

	// src/routes/blog/2020-08-17-identifying-and-resolving-a-kafka-issue-with-appsignal.svx
	[/^\/blog\/2020-08-17-identifying-and-resolving-a-kafka-issue-with-appsignal\/?$/, [c[0], c[37], c[40]], [c[1]]],

	// src/routes/blog/2018-12-04-dont-be-mean-statistical-means-and-percentiles-101.svx
	[/^\/blog\/2018-12-04-dont-be-mean-statistical-means-and-percentiles-101\/?$/, [c[0], c[37], c[41]], [c[1]]],

	// src/routes/blog/2014-03-31-mongodb-mongoid-and-sideiq-connection-problems.svx
	[/^\/blog\/2014-03-31-mongodb-mongoid-and-sideiq-connection-problems\/?$/, [c[0], c[37], c[42]], [c[1]]],

	// src/routes/blog/2019-03-09-resize-images-from-s3-with-aws-lambda-and-rust.svx
	[/^\/blog\/2019-03-09-resize-images-from-s3-with-aws-lambda-and-rust\/?$/, [c[0], c[37], c[43]], [c[1]]],

	// src/routes/blog/2020-08-28-upload-to-presigned-aws-url-with-rest-client.svx
	[/^\/blog\/2020-08-28-upload-to-presigned-aws-url-with-rest-client\/?$/, [c[0], c[37], c[44]], [c[1]]],

	// src/routes/blog/2019-02-12-replica-set-lag-monitoring-with-appsignal.svx
	[/^\/blog\/2019-02-12-replica-set-lag-monitoring-with-appsignal\/?$/, [c[0], c[37], c[45]], [c[1]]],

	// src/routes/blog/2011-05-21-how-to-control-an-rc-car-with-an-arduino.svx
	[/^\/blog\/2011-05-21-how-to-control-an-rc-car-with-an-arduino\/?$/, [c[0], c[37], c[46]], [c[1]]],

	// src/routes/blog/2016-07-04-monitor-mongodb-load-with-custom-metrics.svx
	[/^\/blog\/2016-07-04-monitor-mongodb-load-with-custom-metrics\/?$/, [c[0], c[37], c[47]], [c[1]]],

	// src/routes/blog/2020-08-27-iawriter-micropub-netlify-static-site.svx
	[/^\/blog\/2020-08-27-iawriter-micropub-netlify-static-site\/?$/, [c[0], c[37], c[48]], [c[1]]],

	// src/routes/blog/2017-11-13-track-cache-hits-with-custom-metrics.svx
	[/^\/blog\/2017-11-13-track-cache-hits-with-custom-metrics\/?$/, [c[0], c[37], c[49]], [c[1]]],

	// src/routes/blog/2014-01-07-realtime-mongodb-with-aggregations.svx
	[/^\/blog\/2014-01-07-realtime-mongodb-with-aggregations\/?$/, [c[0], c[37], c[50]], [c[1]]],

	// src/routes/blog/2018-06-10-apollo-query-batching-and-graphql.svx
	[/^\/blog\/2018-06-10-apollo-query-batching-and-graphql\/?$/, [c[0], c[37], c[51]], [c[1]]],

	// src/routes/blog/2019-10-12-3d-printed-plant-watering-system.svx
	[/^\/blog\/2019-10-12-3d-printed-plant-watering-system\/?$/, [c[0], c[37], c[52]], [c[1]]],

	// src/routes/blog/2011-12-04-a-trakt-tv-siri-proxy-plugin.svx
	[/^\/blog\/2011-12-04-a-trakt-tv-siri-proxy-plugin\/?$/, [c[0], c[37], c[53]], [c[1]]],

	// src/routes/blog/2013-07-30-taming-mongodb-disk-usage.svx
	[/^\/blog\/2013-07-30-taming-mongodb-disk-usage\/?$/, [c[0], c[37], c[54]], [c[1]]],

	// src/routes/blog/2018-07-03-custom-exceptions-in-ruby.svx
	[/^\/blog\/2018-07-03-custom-exceptions-in-ruby\/?$/, [c[0], c[37], c[55]], [c[1]]],

	// src/routes/blog/2018-10-23-the-innards-of-a-ruby-gem.svx
	[/^\/blog\/2018-10-23-the-innards-of-a-ruby-gem\/?$/, [c[0], c[37], c[56]], [c[1]]],

	// src/routes/blog/2013-06-13-reducing-mongodb-queries.svx
	[/^\/blog\/2013-06-13-reducing-mongodb-queries\/?$/, [c[0], c[37], c[57]], [c[1]]],

	// src/routes/blog/2019-02-14-dropzone-app-stimulus-js.svx
	[/^\/blog\/2019-02-14-dropzone-app-stimulus-js\/?$/, [c[0], c[37], c[58]], [c[1]]],

	// src/routes/blog/2019-12-03-mailgun-europe-and-rails.svx
	[/^\/blog\/2019-12-03-mailgun-europe-and-rails\/?$/, [c[0], c[37], c[59]], [c[1]]],

	// src/routes/blog/2018-04-08-fix-rx100-startup-issue.svx
	[/^\/blog\/2018-04-08-fix-rx100-startup-issue\/?$/, [c[0], c[37], c[60]], [c[1]]],

	// src/routes/blog/2019-04-23-kafka-sidekiq-ruby.svx
	[/^\/blog\/2019-04-23-kafka-sidekiq-ruby\/?$/, [c[0], c[37], c[61]], [c[1]]],

	// src/routes/blog/2016-02-05-upgrading-mongoid.svx
	[/^\/blog\/2016-02-05-upgrading-mongoid\/?$/, [c[0], c[37], c[62]], [c[1]]],

	// src/routes/blog/2014-08-04-consistent-api.svx
	[/^\/blog\/2014-08-04-consistent-api\/?$/, [c[0], c[37], c[63]], [c[1]]],

	// src/routes/blog/2019-01-27-blog-update.svx
	[/^\/blog\/2019-01-27-blog-update\/?$/, [c[0], c[37], c[64]], [c[1]]],

	// src/routes/blog.svelte
	[/^\/blog\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/uses.svx
	[/^\/uses\/?$/, [c[0], c[66]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];