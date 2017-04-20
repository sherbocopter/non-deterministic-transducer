`use strict`

var td = null;

function run(input) {
	var routes = [];
	routes.push(getFreshRoute());

	for (var i = 0; i < input.length; ++i) {
		var c = input[i];
		var newRoutes = [];

		for (var j = 0; j < routes.length; ++j) {
			var route = routes[j];
			var lambdaRoutes = doLambdaRoutes(route);

			for (var k = 0; k < lambdaRoutes.length; ++k) {
				newRoutes = newRoutes.concat(doRoute(lambdaRoutes[k], c));
			}
		}

		routes = newRoutes;
	}

	var newRoutes = [];
	for (var i = 0; i < routes.length; ++i) {
		newRoutes = newRoutes.concat(doLambdaRoutes(routes[i]));
	}
	routes = newRoutes;

	var result = [];
	for (var i = 0; i < routes.length; ++i) {
		var route = routes[i];

		if (td.stariIesire.contains(route.stare)
			&& !result.contains(route.iesire)) {
			result.push(route.iesire);
		}
	}

	return result;
}

function doLambdaRoutes(route) {
	var lambdaRoutes = [];

	var cnt = 0;
	var newLambdaRoutes = [];
	newLambdaRoutes.push(route);
	do {
		lambdaRoutes = lambdaRoutes.concat(newLambdaRoutes);

		aux = newLambdaRoutes;
		newLambdaRoutes = [];
		for (var l = 0; l < aux.length; ++l) {
			newLambdaRoutes = newLambdaRoutes.concat(doRoute(aux[l], td.lambda));
		}

		cnt++; // block pentru automate nefinite
	}
	while (cnt < 10 && newLambdaRoutes.length != 0);

	return lambdaRoutes;
}

function doRoute(route, c) {
	var newRoutes = [];

	for (var i = 0; i < td.tranzitie.length; ++i) {
		var tranz = td.tranzitie[i];
		if (route.stare == tranz.p
			&& c == tranz.a
			&& route.stiva[0] == tranz.z) {
			var newRoute = getFreshRoute();
			newRoute.stare = tranz.q;
			newRoute.stiva = tranz.b + route.stiva.substring(1);
			newRoute.iesire = route.iesire + tranz.i;

			if (!newRoutes.contains(newRoute)) {
				newRoutes.push(newRoute);
			}
		}
	}

	return newRoutes;
}

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

function getFreshRoute() {
	var result = {
		stare: td.stareInit,
		stiva: td.stivaInit,
		iesire: ''
	}

	return result;
}

module.exports = {
	loadData: function(translatorData) {
		td = translatorData;
	},
	getTranslatorData: function() {
		return td;
	},
	run: run
}