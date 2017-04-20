`use strict`

var stareInit = 'q0';
var stariIesire = ['q2'];
var stivaInit = 'Z';

// (p)--- a,z/b,i -->(q)
// p -> starea sursa
// a -> intrare
// z -> stiva.pop()
// b -> stiva.push(b)
// i -> iesire
// q -> starea destinatie
// ------ \ -> lambda
/*
	{
		p:
		a:
		z:
		b:
		i:
		q:
	}
*/

var tranzitie = [
	{
		p: 'q0',
		a: 'L',
		z: 'Z',
		b: 'SZ',
		i: '',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'L',
		z: 'S',
		b: 'aSbS',
		i: '1',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'L',
		z: 'S',
		b: 'bSaS',
		i: '2',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'L',
		z: 'S',
		b: '',
		i: '3',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'a',
		z: 'a',
		b: '',
		i: '',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'b',
		z: 'b',
		b: '',
		i: '',
		q: 'q1'
	},
	{
		p: 'q1',
		a: 'L',
		z: 'Z',
		b: 'Z',
		i: '',
		q: 'q2'
	}
];


// M = {(a^i, b^j) | i,j>=0; i<=j<=2*i}
/*
var tranzitie = [
	{
		p: 'q0',
		a: 'a',
		z: 'Z',
		b: 'Z',
		i: 'b',
		q: 'q0'
	},
	{
		p: 'q0',
		a: 'a',
		z: 'Z',
		b: 'Z',
		i: 'B',
		q: 'q0'
	},
	// {
	// 	p: 'q1',
	// 	a: 'a',
	// 	z: 'Z',
	// 	b: 'Z',
	// 	i: 'c',
	// 	q: 'q1'
	// },
	// {
	// 	p: 'q1',
	// 	a: 'a',
	// 	z: 'Z',
	// 	b: 'Z',
	// 	i: 'C',
	// 	q: 'q1'
	// },
	{
		p: 'q0',
		a: 'L',
		z: 'Z',
		b: 'Z',
		i: 'X',
		q: 'q1'
	},
	{
		p: 'q2',
		a: 'a',
		z: 'Z',
		b: 'Z',
		i: 'd',
		q: 'q2'
	},
	{
		p: 'q2',
		a: 'a',
		z: 'Z',
		b: 'Z',
		i: 'D',
		q: 'q2'
	},
	{
		p: 'q1',
		a: 'L',
		z: 'Z',
		b: 'Z',
		i: 'X',
		q: 'q2'
	}
]*/

module.exports = {
	translatorData: function() {
		var result = {
			stareInit: stareInit,
			stariIesire: stariIesire,
			stivaInit: stivaInit,
			tranzitie: tranzitie,
			lambda: 'L'
		}

		return result;
	},
	translatorInput: function() {
		return 'abbaab';
	}
};