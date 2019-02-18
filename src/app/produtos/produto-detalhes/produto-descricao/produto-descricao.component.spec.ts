import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDescricaoComponent } from './produto-descricao.component';

describe('ProdutoDescricaoComponent', () => {
  let component: ProdutoDescricaoComponent;
  let fixture: ComponentFixture<ProdutoDescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
