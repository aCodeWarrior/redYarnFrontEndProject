run:
	ng serve --open
component: ${pathName}
	ng generate component --skip-tests=true ${pathName}
service: ${serviceNamne}
	ng generate service --skip-tests=true ${serviceName}

