# angular-resizable-pane

## In HTML:  
```html
<div class="container">
    <angular-resizable-pane [layout]="layout">
        <ng-container ngProjectAs="section_1">
            <h1>Section1</h1>
        </ng-container>
        <ng-container ngProjectAs="section_2">
            <h1>Section2</h1>
        </ng-container>
    </angular-resizable-pane>
</div>
```

## Layout model:  
```ts
layout : Layout = {
    orientation: 'horizontal',
    unitType: 'percent',
    initSize: 20,
    minSize: 10,
    maxSize: 50
}
```

