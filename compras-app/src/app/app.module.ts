import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que este archivo exista
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module'; // Verifica que este módulo existe
import { ProductosModule } from './productos/productos.module'; // Verifica que este módulo existe
import { ComprasModule } from './compras/compras.module'; // Verifica que este módulo existe


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Asegúrate de incluir esto
    HttpClientModule,
    ClientesModule,
    ProductosModule,
    ComprasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
