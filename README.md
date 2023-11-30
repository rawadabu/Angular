# Angular Course

Angular is a JavaScript Framework which allows you to create creative Single-Page-Applications.

To start a new project `ng new [appname] --no-strict --standalone false --routing false`

> Course Structure -> Basics -> Components&Databinding -> Directives -> Services &Dependency Injection -> Routing -> Observables -> Forms -> Pipes -> Http -> Authentication -> Obtimizations & NgModules -> Deployment

> TypeScript: More features than vanilla JS like Types, Classes, Interfaces. It compiled to JavaScript handled by the CLI

- How Angular Apps gets Loaded and Started: main.ts started, then we boostrap an Angular application, and we pass this module as an argument and analyze it.

## Components

Its own business logic, it allows you to split up your complex application, into reusable parts.

> Creating a new component: `ng generate component [name]` or `ng g c [name]`

## Decorators

Is a TypeScript feature, which allow you to enhance your classes.
`@Component({
  selector: '[app selector unique name]',
  templateUrl: './path into html',
})`

or the @NgModule decorator
`@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})`

Properties:

1. bootstrap: Which components you should be aware of when app starts.
2. declerations: Register new components in this property.
3. imports: Allows us to use another modules

## Databinding

Databinding = Communication.
Output data from TS code into HTML. `String Interpolation ( {{ data }})` or `Property Binding([property]='data')`

Click event using Event Binding ((event)="expression")

The combination of Outputdata and React to Events are -> _Two-Way-Binding_ ([ngModel]="data")

1. String Interpolation: A great tool for outputting data from my ts file into the html template.
2. Property Binding: [disabled]="booleanVal"
3. Event Binding: (click)="function()"

- Property Binding vs. String Interpolation:

## Directives

It tells Angular to listen to anything you enter and store it in the given name property.
