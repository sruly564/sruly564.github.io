let init = document.getElementById('initial');
let increase = document.getElementById('increase');
let years = document.getElementById('years');
let add = document.getElementById('add');
let start = document.getElementById('start');
let end = document.getElementById('end');
let compound = document.getElementById('my');
let res = document.getElementById('res');
let currency = document.getElementById('currency');
let investmentType = document.getElementById('investment-type');
let result;

function calc(
  init,
  increase,
  years,
  add,
  start,
  end,
  compound,
  currency,
  investmentType,
  taxBracket
) {
  switch (compound.value) {
    case 'day':
      years *= 365;
      increase /= 365;
      add /= 365;
      break;
    case 'month':
      years *= 12;
      increase /= 12;
      add /= 12;
      break;
    default:
      // Yearly compounding
      break;
  }

  for (let i = 0; i < years; i++) {
    if (i >= start - 1 && i <= end - 1) {
      init += add;
    }
    init += (init / 100) * increase;
  }

  return init;
}

submit.addEventListener('click', function (e) {
  e.preventDefault();

  // Validate input values
  if (
    isNaN(init.value) ||
    isNaN(increase.value) ||
    isNaN(years.value) ||
    (add && isNaN(add.value)) ||
    (start && isNaN(start.value)) ||
    (end && isNaN(end.value))
  ) {
    alert('Invalid input. Please enter valid numbers.');
    return;
  }

  starta = parseFloat(start.value) || 0;
  inita = parseFloat(init.value);
  increasea = parseFloat(increase.value);
  yearsa = parseFloat(years.value);
  adda = parseFloat(add.value) || 0;
  enda = parseFloat(end.value) || yearsa;

  result = calc(
    inita,
    increasea,
    yearsa,
    adda,
    starta,
    enda,
    compound.value,
    currency.value,
    investmentType.value
  );

  // Format result as currency
  result = result.toLocaleString('en-US', {
    style: 'currency',
    currency: currency.value,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  res.textContent = result;
});

reset.addEventListener('click', function () {
  window.location.reload();
});
// Event listeners for input validation
let errorInput = document.querySelectorAll('.error');
init.addEventListener('input', function () {
  if (isNaN(init.value)) {
    errorInput[0].style.display = 'block';
  } else {
    errorInput[0].style.display = 'none';
  }
});
increase.addEventListener('input', function () {
  if (isNaN(increase.value)) {
    errorInput[1].style.display = 'block';
  } else {
    errorInput[1].style.display = 'none';
  }
});
years.addEventListener('input', function () {
  if (isNaN(years.value)) {
    errorInput[2].style.display = 'block';
  } else {
    errorInput[2].style.display = 'none';
  }
});
add.addEventListener('input', function () {
  if (add.value && isNaN(add.value)) {
    errorInput[3].style.display = 'block';
  } else {
    errorInput[3].style.display = 'none';
  }
});
start.addEventListener('input', function () {
  if (start.value && isNaN(start.value)) {
    errorInput[4].style.display = 'block';
  } else {
    errorInput[4].style.display = 'none';
  }
});
end.addEventListener('input', function () {
  if (end.value && isNaN(end.value)) {
    errorInput[5].style.display = 'block';
  } else {
    errorInput[5].style.display = 'none';
  }
});
