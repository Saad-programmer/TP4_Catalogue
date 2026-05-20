import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProduitService, Produit } from '../../produit';


@Component({
  standalone:true,
  selector: 'app-detail-produit',
  imports: [CommonModule, RouterLink,CurrencyPipe],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit implements OnInit{
  id:String = '';
  produit:Produit | undefined;

  constructor(private route:ActivatedRoute,private produitService:ProduitService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produit = this.produitService.getById(+this.id);
    console.log('Produit demande: ',this.id,'->',this.produit?.nom);
  }
}
