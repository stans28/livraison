var eq1 = [], eq2 = [] , eq3 = [], sol = [0,0,0], sol1 = [], sol2 = [], sol3 = [];

$('#resoudre').click(() => {
  eq1 = [$('.a1').html(), $('.b1').html(), $('.c1').html(), $('.d1').html()];
  eq2 = [$('.a2').html(), $('.b2').html(), $('.c2').html(), $('.d2').html()];
  eq3 = [$('.a3').html(), $('.b3').html(), $('.c3').html(), $('.d3').html()];

  for (var i = 0; i < 4; i++) {
    sol1[i] = (eq2[0] * eq1[i]) - (eq1[0] * eq2[i]);
  }

  for (var i = 0; i < 4; i++) {
    sol2[i] = (eq3[0] * eq1[i]) - (eq1[0] * eq3[i]);
  }

  for (var i = 0; i < 4; i++) {
    sol3[i] = (sol2[1] * sol1[i]) - (sol1[1] * sol2[i]);
  }

  sol[2] = (sol3[3] / sol3[2]).toFixed(2);

  sol[1] = ((sol2[3] - (sol2[2]) * sol[2]) / sol2[1]).toFixed(2);

  sol[0] = ((eq1[3] - (eq1[1] * sol[1]) - (eq1[2] * sol[2])) / eq1[0]).toFixed(2);

  $('.x').html(sol[0]);
  $('.y').html(sol[1]);
  $('.z').html(sol[2]);
});
