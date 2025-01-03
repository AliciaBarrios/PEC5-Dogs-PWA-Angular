import { Component, Input, OnInit } from '@angular/core';
import { Grid } from 'src/app/Models/grid.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() grid!: Grid[];
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<Grid>;

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource(this.grid);
  }
}
