import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../common/transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  transactionForm!: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService){
    this.transactionForm = this.fb.group({
      description: [''],
      amount: ['0'],
    });
  }

  onSubmit(): void{
    const transaction : Transaction = this.transactionForm.value;
    this.transactionService.addTransaction(transaction);
    this.transactionForm.reset();
  }
}
