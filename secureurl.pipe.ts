import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Pipe({
  name: 'secureurl'
})
export class SecureurlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}
	
	transform(url: string): SafeUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

}
