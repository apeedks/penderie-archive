import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Pipe({
  name: 'securehtml'
})
export class SecurehtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}
	
	transform(url: string)  {
		return this.sanitizer.bypassSecurityTrustHtml(url);
	}

}
