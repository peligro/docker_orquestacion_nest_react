<hr />

<h1>Ejemplo React con Nestjs desde orquestación con Docker y Docker compose</h1>
<h2>Desde la URL http://localhost:4000/api/ que está en la misma orquestación pero en otro contenedor</h2>
 

#instalar contenedor<br/>
<code>docker-compose up --build</code>
<hr />
#entrar a la consola
<br/>
<code>docker exec -it [nombre-contenedor] bash</code>
<hr />
#detener proyecto
<br/>
<code>docker-compose down</code>