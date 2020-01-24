import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CadastroService } from '../services/cadastro.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-cadastro-pokemon',
  templateUrl: './cadastro-pokemon.component.html',
  styleUrls: ['./cadastro-pokemon.component.sass']
})
export class CadastroPokemonComponent implements OnInit {

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      categoria: ['', Validators.required],
      habilidade: ['', Validators.required],
      ataque: ['', Validators.required],
      defesa: ['', Validators.required],
      velocidade: ['', Validators.required]
    })

  }

  cadPokemon() {
    if (this.form.valid) {
      this.cadastroService.cadastrarPokemon(this.form.value).subscribe(
        success => {
          const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: { header: 'Sucesso', message: 'Pokemon cadastrado!' }
          });
    
          dialogRef.afterClosed().subscribe(result => {
            console.log('fechou');
          });
        },
        error => {
          const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: { header: 'Erro', message: 'Ocorreu um erro' + error }
          });
    
          dialogRef.afterClosed().subscribe(result => {
            console.log('fechou');
          });
        }
      )
    } else {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: { header: 'Erro', message: 'Preencha os campos em branco' }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('fechou');
      });
    }
  }

}
