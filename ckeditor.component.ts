import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

@Component({
    selector: 'app-ckeditor',
    template: `<ng-content></ng-content><ckeditor [(ngModel)]="value" [config]="{
                    contentsCss: ['assets/css/bootstrap.min.css','assets/css/main.css'],extraPlugins: 'divarea',allowedContent: true,
                      filebrowserImageUploadUrl: 'https://demo.penderie.com/api/public/ckfinder/uploadimage.php?command=QuickUpload&type=Images',
                      toolbarGroups:[
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'forms', groups: [ 'forms' ] },
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                        { name: 'links', groups: [ 'links' ] },
                        { name: 'unlinks', groups: [ 'unlinks' ] },
                        
                        { name: 'insert', groups: [ 'insert' ] },
                        '/',
                        { name: 'styles', groups: [ 'styles' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'tools', groups: [ 'tools' ] },
                        { name: 'others', groups: [ 'others' ] },
                        { name: 'about', groups: [ 'about' ] }
                      ],
                      removeDialogTabs: 'image:Link;image:advanced',
                      removeButtons:'Bold,Save,NewPage,Preview,Print,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Font,FontSize,Maximize,ShowBlocks,About,Templates',
                      fillEmptyBlocks:false,
                      autoParagraph:false,
                      ignoreEmptyParagraph:false}"
                    name="content" [readonly]="false" debounce="500" (change)="onChange($event)" (blur)="onBlur()">
                  </ckeditor>`,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CkEditorComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CkEditorComponent),
        multi: true,
      }]
})
export class CkEditorComponent implements ControlValueAccessor {

    //The internal data model
    private innerValue: any = '';
    private parseError: boolean;

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    // change events from the textarea
    onChange(value) {
        this.innerValue = value;
        if (value.target != undefined) {
            this.innerValue = value.target.value;
        }
        this.parseError = false;
        if (value == '') {
            this.parseError = true;
        }
        // console.log(value,this.parseError);
        this.onChangeCallback(this.innerValue);
    }

    validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

}
