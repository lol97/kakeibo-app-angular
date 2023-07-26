import { Component } from '@angular/core';
import { Transaction } from '../common/transaction.model';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService){
    this.transactionService.transactions$.subscribe(
      (transactions) => {
        this.transactions = transactions;
      }
    );
  }
}
