import { Component, OnInit } from '@angular/core';
import { InstallmentService } from '../services/installment-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-installment-pay',
  imports: [RouterModule],
  templateUrl: './installment-repay.component.html',
  styleUrl: './installment-repay.component.scss',
})
export class InstallmentRepayComponent implements OnInit {
  installmentId!: number;

  constructor(
    private installmentService: InstallmentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.installmentId = Number(this.route.snapshot.paramMap.get('installmentId'));
  }

  goBack(): void {
    this.location.back();
  }
}
