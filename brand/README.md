# Marca Spot — símbolo

`spot-ring.svg` es la versión vectorial del símbolo, redibujada a partir de `spot-ring-white.png`
(el original `CirculoBlanco.png` entregado por el cliente: 3536 × 3579 px, blanco sobre transparencia).

## Geometría medida sobre el original

Ajuste por mínimos cuadrados del borde exterior más perfil radial cada 15°.

| Medida | Original | viewBox 100 |
|---|---|---|
| Centro | 1756.9 , 1791.4 px | 50 , 50 |
| Radio exterior | 1789 px (rango 1772–1802) | 50 |
| Radio interior | 1352 px (rango 1325–1379) | 37.8 |
| Grosor del anillo | 437 px | 12.2 |
| Radio de la línea central | 1570 px | 43.9 |
| Apertura angular | 16.8° | 16.8° |
| Centro de la apertura | 179.4° | 180° (oeste) |

Los extremos del arco son cortes rectos radiales: `stroke-linecap: butt`, nunca redondeados.

## Dos correcciones deliberadas respecto al PNG

1. **El original no es un círculo perfecto.** El radio exterior oscila ±15 px y el interior ±27 px
   sobre 1789 px: deriva de exportación, no intención de diseño. El vector usa los radios medios.
2. **La apertura se normaliza a 180° exactos** (el original cae en 179.4°). La apertura es el eje
   sobre el que se parte la pantalla en la home, así que tiene que ser horizontal de verdad.

El anillo del original además queda recortado por el borde izquierdo del lienzo (la punta del arco
a 171° caería en x = −12 px). El vector no tiene ese recorte.

## Uso

El SVG hereda el color del contexto (`currentColor`): sirve en blanco, en menta `#10E6B3`, en latón
`#B8935A` o grabado sobre placa sin duplicar archivos. La apertura mira siempre al oeste.

`spot-ring-white.png` se conserva como fuente de verdad entregada por el cliente y como respaldo
para contextos que no admiten SVG (firmas de correo, plataformas de terceros).
