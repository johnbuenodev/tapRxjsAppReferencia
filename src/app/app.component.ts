import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
//importado dos operators
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tapAppRxjs';
  
  valueClick: any;
  valueObjetoTarget : any;
  
  constructor(){
  
  }

  ngOnInit(): void {

    
    
    const clickExec = fromEvent(document, 'click');

    const positionsClick = clickExec.pipe(
      tap( ev => 
        console.log("OnClick: ", ev), 
        err => console.log("Erro: ", err)),
        //Get TimeStamp in page - tempo de execução em pagina
      tap( ev => { console.log("Objeto:" + ev);
         this.valueObjetoTarget = ev;
      }),
      tap( ev => { this.valueClick = ev.timeStamp }),
      tap(() => console.log("Completado processo!"))
    );
   
    positionsClick.subscribe(res => console.log(res));
    
  }

}
