import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { ProduitService, Produit } from "../../produit";

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits implements OnInit {
  produits: Produit[] = [];
  
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    // FIX: Assign the result to produits
    this.produits = this.produitService.getAll();
  }
}