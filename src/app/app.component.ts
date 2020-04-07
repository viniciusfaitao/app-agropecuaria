import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { cachorroGrande } from './produtosCachorro';
import { cachorroMedio } from './produtosCachorro';
import { cachorroPequeno } from './produtosCachorro';
import { gatoAdulto } from './produtosGato';
import { gatoFilhote } from './produtosGato';
import { gatoCastrado } from './produtosGato';
import { avesGalinha } from './produtosAves';
import { avesPassaros } from './produtosAves';
import { avesOutros } from './produtosAves';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products1 = cachorroGrande; 
  products2 = cachorroMedio;
  products3 = cachorroPequeno;
  products4 = gatoAdulto; 
  products5 = gatoFilhote; 
  products6 = gatoCastrado; 
  products7 = avesGalinha; 
  products8 = avesPassaros; 
  products9 = avesOutros; 
  @ViewChild('multiSelect') multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public dataAnimal = [];
  public dataPorte = [];
  public dataIdade = [];
  public dataGato = [];
  public dataAves = [];
  public settings = {};
  public selectedItems = [];
  public isCachorroOption = false;
  public isCachorroPequeno = false;
  public isCachorroMedio = false;
  public isCachorroGrande = false;
  public isGatoOption = false;
  public isGatoAdulto = false;
  public isGatoFilhote = false;
  public isGatoCastrado = false;
  public isAvesOption = false;
  public isAvesGalinha = false;
  public isAvesPassaros = false;
  public isAvesOutros = false;

  ngOnInit() {
    this.dataAnimal = [
      { item_id: 1, item_text: 'Cachorros' },
      { item_id: 2, item_text: 'Gatos' },
      { item_id: 3, item_text: 'Aves' }
    ];
    this.dataPorte = [
      { item_id: 1, item_text: 'Pequeno' },
      { item_id: 2, item_text: 'Medio' },
      { item_id: 3, item_text: 'Grande' },
    ];
    this.dataIdade = [
      { item_id: 1, item_text: 'Filhote' },
      { item_id: 2, item_text: 'Adulto 1+' },
      { item_id: 3, item_text: 'Senior 7+' },
    ];
    this.dataGato = [
      { item_id: 1, item_text: 'Adulto' },
      { item_id: 2, item_text: 'Filhote' },
      { item_id: 3, item_text: 'Castrado' },
    ];
    this.dataAves = [
      { item_id: 1, item_text: 'Galinha' },
      { item_id: 2, item_text: 'Passaros' },
      { item_id: 3, item_text: 'Outros' },
    ];

    var bttn = document.getElementById("Price");
    var bttn2 = document.getElementById("Name");
    
    bttn.onclick = function(){
         var orderBy = require('orderby');
         orderBy(cachorroGrande, ['price']);
         orderBy(cachorroMedio, ['price']);
         orderBy(cachorroPequeno, ['price']);
         orderBy(gatoAdulto, ['price']);
         orderBy(gatoFilhote, ['price']);
         orderBy(gatoCastrado, ['price']);

    }
    bttn2.onclick = function(){
          var orderBy = require('orderby');
          orderBy(cachorroGrande, ['name']); 
          orderBy(cachorroMedio, ['name']); 
          orderBy(cachorroPequeno, ['name']);
          orderBy(gatoAdulto, ['name']);
          orderBy(gatoFilhote, ['name']);
          orderBy(gatoCastrado, ['name']);
    }
  
    this.settings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Deselecionar tudo',
      limitSelection: -1,
      maxHeight: 197,
      closeDropDownOnSelection: true,
      showSelectedItemsAtTop: true,
      defaultOpen: false,
      
    };
    this.setForm();
  }

  public setForm() {
    this.form = new FormGroup({
       name: new FormControl( Validators.required),
      //  name2: new FormControl(this.dataPorte, Validators.required),
      //  name3: new FormControl(this.dataIdade, Validators.required)
    });
    this.loadContent = true;
  }

  get f() { return this.form.controls; }

  public save() {
    console.log(this.form.value);
  }

  public resetForm() {
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
    // this.multiSelect.isAllItemsSelected = true;
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelectAnimal(item: any) {
    if(item.item_id == 1){
      this.isCachorroOption = true;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoOption = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesOption = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;
    }else if(item.item_id == 2){
      this.isGatoOption = true;
      this.isCachorroOption = false;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesOption = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;
    }else if(item.item_id == 3){
      this.isAvesOption = true;
      this.isCachorroOption = false;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoOption = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;

    }
    
  }
  public onDeSelectAnimal(item: any) {
    if(item.item_id == 1){
      this.isCachorroOption = false;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoOption = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesOption = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;
    }else if(item.item_id == 2){
      this.isCachorroOption = false;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoOption = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesOption = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;
    }else if(item.item_id == 3){
      this.isCachorroOption = false;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
      this.isGatoOption = false;
      this.isGatoAdulto = false;
      this.isGatoFilhote = false;
      this.isGatoCastrado = false;
      this.isAvesOption = false;
      this.isAvesGalinha = false;
      this.isAvesPassaros = false;
      this.isAvesOutros = false;
    }
    console.log(item);
  }

  public onItemSelectPorte(item: any) {
    if(item.item_id == 1){
      this.isCachorroPequeno = true;
      this.isCachorroGrande = false;
      this.isCachorroMedio = false;
    }else if(item.item_id == 2){
      this.isCachorroMedio = true;
      this.isCachorroGrande = false;
      this.isCachorroPequeno = false;
    }else if(item.item_id == 3){
      this.isCachorroGrande = true;
      this.isCachorroMedio = false;
      this.isCachorroPequeno = false;
    }
  }
  public onDeSelectPorte(item: any) {
    if(item.item_id == 1){
      this.isCachorroPequeno = false;
      this.isCachorroMedio = false;
      this.isCachorroGrande = false;
    }else if(item.item_id == 2){
      this.isCachorroPequeno = false;
      this.isCachorroMedio = false;
      this.isCachorroGrande = false;
    }else if(item.item_id == 3){
      this.isCachorroPequeno = false;
      this.isCachorroMedio = false;
      this.isCachorroGrande = false;
    }
    console.log(item);
  }
  
  public onSelectGato(item: any){
   
    if(item.item_id == 1){
        this.isGatoAdulto = true;
        this.isGatoFilhote = false;
        this.isGatoCastrado = false;
      }else if(item.item_id == 2){
        this.isGatoFilhote = true;
        this.isGatoAdulto = false;
        this.isGatoCastrado = false;
      }else if(item.item_id == 3){
        this.isGatoCastrado = true;
        this.isGatoAdulto = false;
        this.isGatoFilhote = false;
      }
    }


  public onDeSelectGato(item: any){
   
    if(item.item_id == 1){
        this.isGatoAdulto = false;
        this.isGatoFilhote = false;
        this.isGatoCastrado = false;
      }else if(item.item_id == 2){
        this.isGatoFilhote = false;
        this.isGatoAdulto = false;
        this.isGatoCastrado = false;
      }else if(item.item_id == 3){
        this.isGatoCastrado = false;
        this.isGatoAdulto = false;
        this.isGatoFilhote = false;
      }
    }

    public onSelectAves(item: any){
   
    if(item.item_id == 1){
        this.isAvesGalinha = true;
        this.isAvesPassaros = false;
        this.isAvesOutros = false;
      }else if(item.item_id == 2){
        this.isAvesGalinha = false;
        this.isAvesPassaros = true;
        this.isAvesOutros = false;
      }else if(item.item_id == 3){
        this.isAvesGalinha = false;
        this.isAvesPassaros = false;
        this.isAvesOutros = true;
      }
    }


  public onDeSelectAves(item: any){
   
    if(item.item_id == 1){
        this.isAvesGalinha = false;
        this.isAvesPassaros = false;
        this.isAvesOutros = false;
      }else if(item.item_id == 2){
        this.isAvesGalinha = false;
        this.isAvesPassaros = false;
        this.isAvesOutros = false;
      }else if(item.item_id == 3){
        this.isAvesGalinha = false;
        this.isAvesPassaros = false;
        this.isAvesOutros = false;
      }
    }
}

//  share() {
//     window.alert('O produto foi compartilhado!');
//   }

//    onNotify() {
//     window.alert('Você sera notificado quando o produto estiver a venda');
//   }
//   button(){
//    alert('Botão clicado!');
    
//   }