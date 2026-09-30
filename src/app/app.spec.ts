import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ClaudiomildoVentura');
  });

  it('links to the supplied LinkedIn profile', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('.contact-actions a');
    expect(link.getAttribute('href')).toBe('https://www.linkedin.com/in/claudiomildo-ventura/');
    expect(link.getAttribute('rel')).toContain('noopener');
  });

  it('opens the mobile menu and closes it after navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    fixture.nativeElement.querySelector('nav a').click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('expands and collapses all certifications', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelectorAll('.credential-hidden').length).toBe(10);
    const button = root.querySelector('.expand-button') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();
    expect(root.querySelectorAll('.credential-hidden').length).toBe(0);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    button.click();
    await fixture.whenStable();
    expect(root.querySelectorAll('.credential-hidden').length).toBe(10);
  });

  it('renders five employers and marks the MBA as ongoing', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('.experience-row').length).toBe(5);
    expect(fixture.nativeElement.querySelector('.education-grid').textContent).toContain(
      'EM ANDAMENTO',
    );
    expect(fixture.nativeElement.querySelector('.education-grid').textContent).toContain(
      'ABR 2027',
    );
  });
});
