import { Component, OnInit, ViewChild ,Input, EventEmitter, Output, OnChanges } from '@angular/core';
import $ from 'jquery';
@Component({
    selector: 'app-statusfilter',
    template: `<div class="inner-filts-bloger">
                                        <div class="our-checkboxs bigst-s-font">
                                            <p><input type="checkbox" id="s-2"   name="check[]" (change)="selectstatus()"  /><label for="s-2">Status </label></p>
                                        </div>
                                        <ul class="mCustomScrollbar cust-sel-marg">
                                            <div class="our-checkboxs">
                                                <p><input type="checkbox"  class="checkbox2"  id="s-3" (change)="current()"  name="check[]" value="Published" /><label for="s-3" >Published</label></p>
                                                <p><input type="checkbox"  class="checkbox2"  id="s-4" (change)="current()"  name="check[]" value="Draft" /><label for="s-4">Draft</label></p>
                                                <p><input type="checkbox"  class="checkbox2"  id="s-5" (change)="current()"  name="check[]" value="Trash" /><label for="s-5">Trash</label></p>
                                             </div>
                                        </ul>
                                    </div>`,
    providers: []
})
export class StatusFilterComponent implements OnInit {
	@Output() changed = new EventEmitter();
	status:any = ['Published','Draft','Trash'];
	constructor(){}
	
	ngOnInit() {
		
	}
	selectstatus()
	{
		//select all checkboxes
		$("#s-2").change(function(){  //"select all" change 
		    var cstatus = this.checked; // "select all" checked status
    		$('.checkbox2').each(function(){ //iterate all listed checkbox items
        		this.checked = cstatus; //change ".checkbox" checked status
    		});
		});

		$('.checkbox2').change(function(){ //".checkbox" change 
    		//uncheck "select all", if one of the listed checkbox item is unchecked
    		if(this.checked == false){ //if this item is unchecked
        		$("#s-2")[0].checked = false; //change "select all" checked status to false
    		}
    
    		//check "select all" if all checkbox items are checked
    		if ($('.checkbox2:checked').length == $('.checkbox2').length ){ 
        		$("#s-2")[0].checked = true; //change "select all" checked status to true
    		}
		});
		
		if($("#s-2").is(":checked"))
			this.changed.emit(this.status);
		else
			this.changed.emit([]);
	}
	
	current(){
		let status = [];
		$('.checkbox2').each(function(){ //iterate all listed checkbox items
			if(this.checked)
				status.push($(this).val()); //change ".checkbox" checked status
    	});
		this.changed.emit(status);
	}
}
