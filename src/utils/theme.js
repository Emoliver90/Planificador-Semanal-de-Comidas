export function applyTheme() {
  // Tonos relacionados con cocina
  const kitchenHues = [
    18,  // naranja
    28,  // calabaza
    38,  // mostaza
    95,  // verde oliva
    130, // verde fresco
    8    // rojo tomate
  ];

  const hue = kitchenHues[Math.floor(Math.random() * kitchenHues.length)];

  document.documentElement.style.setProperty('--bg-color', `${hue} 40% 96%`);
  document.documentElement.style.setProperty('--card-color', `${hue} 35% 94%`);
  document.documentElement.style.setProperty('--card-color-alt', `${hue} 30% 90%`);
  document.documentElement.style.setProperty('--main-color', `${hue} 75% 48%`);
  document.documentElement.style.setProperty('--main-color-hover', `${hue} 82% 42%`);
  document.documentElement.style.setProperty('--text-color', `${hue} 18% 18%`);
  document.documentElement.style.setProperty('--border-color', `${hue} 25% 82%`);

  let styleTag = document.getElementById("dynamic-theme");

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "dynamic-theme";
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = `
  body{
      background:
          linear-gradient(
              180deg,
              hsl(${hue},40%,97%),
              hsl(${hue},35%,94%)
          );
      color:hsl(${hue},18%,18%);
      transition:.4s;
      font-family:'Inter',sans-serif;
  }

  /* Enlaces y botones */

  a{
      color:hsl(${hue},60%,35%);
      text-decoration:none;
      transition:.25s;
  }

  a:hover{
      color:hsl(${hue},80%,42%);
  }

  button{
      background:hsl(${hue},75%,48%);
      color:white;
      border:none;
      border-radius:10px;
      padding:.7rem 1.2rem;
      cursor:pointer;
      transition:.25s;
      font-weight:600;
      box-shadow:0 5px 15px hsla(${hue},50%,30%,.18);
  }

  button:hover{
      background:hsl(${hue},82%,42%);
      transform:translateY(-2px);
      box-shadow:0 8px 18px hsla(${hue},55%,30%,.25);
  }

  /* Cards */

  .card{
      background:white;
      border:1px solid hsl(${hue},25%,86%);
      border-radius:18px;
      padding:1.3rem;
      box-shadow:
          0 10px 30px rgba(0,0,0,.06);
      transition:.3s;
  }

  .card:hover{
      transform:translateY(-4px);
      box-shadow:
          0 15px 35px rgba(0,0,0,.1);
  }

  /* Títulos */

  h1,h2,h3{
      color:hsl(${hue},55%,28%);
      font-weight:700;
      margin-bottom:.5rem;
  }

  /* Inputs */

  input,
  textarea,
  select{
      width:100%;
      padding:.8rem;
      border:1px solid hsl(${hue},20%,82%);
      border-radius:10px;
      background:white;
      transition:.25s;
  }

  input:focus,
  textarea:focus,
  select:focus{
      outline:none;
      border-color:hsl(${hue},70%,48%);
      box-shadow:0 0 0 4px hsla(${hue},70%,48%,.12);
  }

  /* Badges */

  .badge{
      display:inline-block;
      padding:.3rem .7rem;
      border-radius:999px;
      background:hsl(${hue},65%,92%);
      color:hsl(${hue},60%,30%);
      font-size:.85rem;
      font-weight:600;
  }

  /* Imágenes de recetas */

  .recipe-image{
      width:100%;
      border-radius:16px;
      object-fit:cover;
      transition:.35s;
  }

  .recipe-image:hover{
      transform:scale(1.03);
  }

  /* Separadores */

  hr{
      border:none;
      height:1px;
      background:hsl(${hue},20%,88%);
  }
  `;
}