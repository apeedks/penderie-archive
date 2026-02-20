import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-themefilter',
    template: `<div class="inner-filts-bloger">
                                        <div class="our-checkboxs bigst-s-font">
                                            <!-- <p><input type="checkbox" id="ts" /><label for="ts">Theme </label></p> -->
                                              <p><label for="theme">Theme</label></p>
                                        </div>
                                        <ul class="mCustomScrollbar cust-sel-marg">
                                            <div class="our-checkboxs">
                                                <p><input type="checkbox" id="test51" /><label for="test51">All</label></p>
                                                <p><input type="checkbox" id="test53" /><label for="test53">The True Luxury</label></p>
                                                <p><input type="checkbox" id="test52" /><label for="test52">Fine Material</label></p>
                                                <p><input type="checkbox" id="test54" /><label for="test54">Superior Craftsmanship</label></p>
                                             </div>
                                        </ul>
                                    </div>`,
    providers: []
})
export class ThemeFilterComponent implements OnInit {
	constructor(){}
	
	ngOnInit() {
		
	}
}
