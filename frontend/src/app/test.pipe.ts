import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'testPipe',
    standalone: true
})
export class TestPipe implements PipeTransform {
    transform(value: string, args: string) {
        switch (args) {
            case 'lowercase':
                return value.toLowerCase().replace(/ /g, '-');
            case 'uppercase':
                return value.toUpperCase();
        }
        return true
    }
}