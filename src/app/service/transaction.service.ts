import { Injectable } from '@angular/core';
import { Transaction } from '../common/transaction.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private transactionSubject = new BehaviorSubject<Transaction[]>(this.transactions);

  transactions$ = this.transactionSubject.asObservable();

  constructor() { }


  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
    this.transactionSubject.next([...this.transactions]);
  }
}
