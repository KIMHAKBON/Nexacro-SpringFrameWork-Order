(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("traceLog");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_log", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"treestate\" type=\"STRING\" size=\"256\"/><Column id=\"total_time\" type=\"FLOAT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"checktime\" type=\"FLOAT\" size=\"256\"/><Column id=\"tag\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"msg\">1</Col><Col id=\"level\">0</Col><Col id=\"treestate\">0</Col><Col id=\"title\">nexacro _onSystemError</Col><Col id=\"total_time\">-999</Col></Row><Row><Col id=\"msg\">2</Col><Col id=\"level\">0</Col><Col id=\"treestate\">1</Col><Col id=\"title\">Application _loadTheme</Col><Col id=\"total_time\">-111</Col></Row><Row><Col id=\"msg\">3</Col><Col id=\"level\">0</Col><Col id=\"treestate\">0</Col><Col id=\"title\">Application _on_init start</Col><Col id=\"total_time\">-222</Col></Row><Row><Col id=\"msg\">4</Col><Col id=\"level\">0</Col><Col id=\"treestate\">1</Col><Col id=\"title\">Application _on_load start</Col><Col id=\"total_time\">-777</Col></Row><Row><Col id=\"msg\">5</Col><Col id=\"level\">0</Col><Col id=\"treestate\">1</Col><Col id=\"title\">Application on_fire_onexit</Col><Col id=\"total_time\">-888</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_confirm_log", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"treestate\" type=\"STRING\" size=\"256\"/><Column id=\"total_time\" type=\"FLOAT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"checktime\" type=\"FLOAT\" size=\"256\"/><Column id=\"tag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_help", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"expr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"expr\">clear</Col></Row><Row><Col id=\"expr\">title</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"expr\">title.indexOf('') &gt;= 0</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"expr\">msg.indexOf('') &gt;= 0</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"expr\">total_time</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"expr\">checktime</Col><Col id=\"code\">5</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"expr\">tag</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"expr\">tag.indexOf('') &gt;= 0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new VirtualFile("vf_log", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fd_log", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_fileopen","930","12","83","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Load file");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","585","12","175","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일선택(내문서 폴더만가능)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_path","21","10","559","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tree","20","70","639","750",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_log");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("use");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_border("1px solid black");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"276\"/><Column size=\"114\"/><Column size=\"55\"/><Column size=\"81\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Func/Event\"/><Cell col=\"2\" text=\"tag\"/><Cell col=\"3\" text=\"total\"/><Cell col=\"4\" text=\"time\"/><Cell col=\"5\" text=\"check\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" cssclass=\"expr:checktime &gt; 10.0 ? &quot;red_color&quot;:total_time == -999 ? &quot;red_color&quot;:total_time &gt; 3.0 ?&quot;red_color&quot;:total_time &gt; 2.0?&quot;yellow_color&quot;:total_time &lt; 0 ?&quot;blue_color&quot;:&quot;&quot;\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:tag\" textAlign=\"left\" cssclass=\"expr:total_time == -999 ? &quot;red_color&quot;:total_time &gt; 3.0 ?&quot;red_color&quot;:total_time &gt; 2.0?&quot;yellow_color&quot;:total_time &lt; 0 ?&quot;blue_color&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:total_time\" textAlign=\"right\" cssclass=\"expr:total_time == -999 ? &quot;red_color&quot;:total_time &gt; 3.0 ?&quot;red_color&quot;:total_time &gt; 2.0?&quot;yellow_color&quot;:total_time &lt; 0 ?&quot;blue_color&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:time\" cssclass=\"expr:total_time == -999 ? &quot;red_color&quot;:total_time &gt; 3.0 ?&quot;red_color&quot;:total_time &gt; 2.0?&quot;yellow_color&quot;:total_time &lt; 0 ?&quot;blue_color&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:checktime\" cssclass=\"expr:checktime &gt; 10.0 ? &quot;red_color&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadText","1037","12","77","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("load text");
            this.addChild(obj.name, obj);

            obj = new Tab("tabLog","668","127","720","703",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabLog);
            obj.set_text("output");
            this.tabLog.addChild(obj.name, obj);

            obj = new TextArea("ta_log","1","2","703","652",null,null,null,null,null,null,this.tabLog.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            this.tabLog.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabLog);
            obj.set_text("log text");
            this.tabLog.addChild(obj.name, obj);

            obj = new TextArea("ta_logtext","1","2","703","599",null,null,null,null,null,null,this.tabLog.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
            obj.set_scrolltype("vertical");
            this.tabLog.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabLog);
            obj.set_text("분석요약");
            this.tabLog.addChild(obj.name, obj);

            obj = new Grid("grd_msg","10","10","702","330",null,null,null,null,null,null,this.tabLog.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_confirm_log");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"345\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"rownum\"/><Cell col=\"1\" text=\"title\"/><Cell col=\"2\" text=\"time\"/><Cell col=\"3\" text=\"total_time\"/><Cell col=\"4\" text=\"checktime\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:time\"/><Cell col=\"3\" text=\"bind:total_time\"/><Cell col=\"4\" text=\"bind:checktime\"/></Band></Format></Formats>");
            this.tabLog.Tabpage3.addChild(obj.name, obj);

            obj = new TextArea("ta_msg","9","349","703","311",null,null,null,null,null,null,this.tabLog.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.tabLog.Tabpage3.addChild(obj.name, obj);

            obj = new PopupDiv("pDivReplace","860","217","437","153",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_url("Base::replace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnReplace","1131","12","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("replace");
            this.addChild(obj.name, obj);

            obj = new Static("st_num","15","45","313","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Button("btnFind","1272","97","35","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("find");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_find","669","97","521","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_go","669","70","89","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btnGo","765","70","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("go(rownum)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_startrow","1198","96","66","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_value("0");
            obj.set_textAlign("right");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","872","128","500","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help","1311","97","31","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("?");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_help","670","126","170","226",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_help");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.set_background("white");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"expr\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:expr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,840,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabLog.Tabpage1.form.ta_log","value","ds_log","msg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabLog.Tabpage3.form.ta_msg","value","ds_confirm_log","msg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_title","value","ds_log","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::replace.xfdl");
        };
        
        // User Script
        this.registerScript("traceLog.xfdl", function() {

        this.readLog = function() {
        //	trace("readlog : " + lv_rownum);
        	var rtn = this.vf_log.readLine();
        //	trace(rtn);
        }

        var lv_data = "";
        var lv_rownum = 0;
        this.processLog = function(text) {
        	var r = lv_rownum;
        	this.st_num.set_text(r);
        	var pos = text.indexOf("$%");
        	if ( pos < 0 ) {
        		lv_data += text;
        		lv_rownum++;
        	} else {
        		if ( lv_data.length > 0 ) {
        			var msgdata = this.ds_log.getColumn(this.ds_log.rowposition,"msg");
        			lv_data = msgdata+lv_data;
        			this.ds_log.setColumn(this.ds_log.rowposition,"msg",lv_data);
        			var tcode = this.ds_log.getColumn(this.ds_log.rowposition,"total_time");
        			if( tcode && tcode < 0 ) {
        				this.ds_confirm_log.setColumn(this.ds_confirm_log.rowposition,"msg",lv_data);
        			}
        			lv_data = "";
        		}
        		var arrtext = text.split("_,_");

        		var row = this.ds_log.addRow();
        		lv_rownum = lv_rownum + 1;
        		var ymd = arrtext[0];
        		var pos = ymd.indexOf("$%");
        		ymd = ymd.substr(pos+2);

        		var atime = arrtext[1].split(":");

        		var h = atime[0].length < 2?"0"+atime[0]:atime[0];
        		var m = atime[1].length < 2?"0"+atime[1]:atime[1];
        		var s = atime[2].length < 2?"0"+atime[2]:atime[2];

        		var time = h+":"+m+":"+s+":"+atime[3];

        		this.ds_log.setColumn(row,"ymd",ymd);
        		this.ds_log.setColumn(row,"time",time);
        		var lvl = parseInt(arrtext[2]);
        		var prelevel = row > 0 ?this.ds_log.getColumn(row-1,"level"):-1;
        		var tag = arrtext[6];

        		if ( prelevel > -1 && (prelevel+1) < lvl) {
        			lvl = prelevel+1;
        		}
        		var pos = tag.indexOf("://");
        		if ( pos >= 0 ) {
        			tag = tag.substr(pos+3);
        			var arrtag = tag.split("/");
        			tag = arrtag[arrtag.length-1];
        		}
        		this.ds_log.setColumn(row,"level",lvl);
        		this.ds_log.setColumn(row,"treestate",arrtext[3]);
        		this.ds_log.setColumn(row,"total_time",arrtext[4]);
        		this.ds_log.setColumn(row,"title",arrtext[5]);
        		this.ds_log.setColumn(row,"tag",tag);
        		this.ds_log.setColumn(row,"rownum",lv_rownum);
        		var str = arrtext[7];

        		if ( str ) 	str = str.split("$$").join("\n");

        		this.ds_log.setColumn(row,"msg",str);

        		if ( row != 0 ) {
        			var arrymd = ymd.split("-");
        			var arrtime = time.split(":");
        			var objDate2 = new nexacro.Date(arrymd[0],arrymd[1],arrymd[2],arrtime[0],arrtime[1],arrtime[2],arrtime[3]);
        			ymd  = this.ds_log.getColumn(row-1,"ymd");
        			time = this.ds_log.getColumn(row-1,"time");
        			arrymd = ymd.split("-");
        			arrtime = time.split(":");
        			var objDate1 = new nexacro.Date(arrymd[0],arrymd[1],arrymd[2],arrtime[0],arrtime[1],arrtime[2],arrtime[3]);
        			var totaltime = nexacro.round((objDate2 - objDate1) / 1000, 3);

        			this.ds_log.setColumn(row,"checktime",totaltime);
        		}
        		if (parseInt(arrtext[4]) < 0){
        			var arow = this.ds_confirm_log.addRow();
        			this.ds_confirm_log.copyRow(arow,this.ds_log,row);
        		}
        	}
        	this.st_num.set_text("처리건수 = " + r + ", 읽은건수 = " + lv_rownum);
        	this.readLog();

        }

        this.btn_fileopen_onclick = function(obj,e)
        {
        	lv_rownum = 0;

        	this.vf_log.open(this.edt_path.value, VirtualFile.openRead );

        };



        this.vf_log_onerror = function(obj,e)
        {
        //	trace("log read error");
        	trace(e.errormsg);
        	this.set_cursor("default");
        };

        this.vf_log_onsuccess = function(obj,e)
        {
        	//this.tabLog.Tabpage2.form.ta_logtext.set_value(lv_rownum);
        	if ( e.reason == 1 ) {
        		this.set_cursor("wait");
        		this.ds_log.clearData();
        		this.ds_confirm_log.clearData();
        		this.ds_log.set_enableevent(false);
        		this.readLog();
        	} else if ( e.reason == 4 ) {
        		if( e.textdata == "" )
        		{
        			alert("Log 분석이 완료되었습니다. \n파일 로그건수와 처리 로그건수가 틀리면 해당 로그데이타를 확인하세요");
        			this.ds_log.set_enableevent(true);
        			this.ds_log.set_rowposition(0);
        			this.ds_confirm_log.set_rowposition(0);
        			obj.close();
        			this.set_cursor("default");
        		} else {
        			this.processLog(e.textdata);
        		}
        	}
        //	trace(e.textdata);
        };

        this.fd_log_onclose = function(obj,e)
        {
        	if ( e.virtualfiles[0] )
        	   this.edt_path.set_value(e.virtualfiles[0].fullpath);
        };

        this.btn_file_onclick = function(obj,e)
        {
        	var varRet;
        	varRet = this.fd_log.open( "FileOpen", FileDialog.LOAD );
        };

        this.btnLoadText_onclick = function(obj,e)
        {
        	var logstr = this.tabLog.Tabpage2.form.ta_logtext.value;
        	var arrlog = logstr.split("\n");

        	lv_rownum = 0;
        	this.ds_log.clearData();
        	this.ds_log.set_enableevent(false);
        	for ( var i = 0 ; i < arrlog.length ; i++ )
        	{
        		this.processLog(arrlog[i]);
        	}
        	this.ds_log.set_enableevent(true);
        	this.ds_log.set_rowposition(0);
        };

        this.btnReplace_onclick = function(obj,e)
        {
        	this.pDivReplace.trackPopup( obj.left-200,obj.bottom+3 );
        };

        this.btnFind_onclick = function(obj,e)
        {
        //	var strExpr = "title.indexOf('"+this.edt_find.value+"') >= 0";
        	var strExpr = this.edt_find.value;
        	var row = this.ds_log.findRowExpr(strExpr,parseInt(this.edt_startrow.value)+1);
        	if ( row < 0 ) alert("찾는 문자열이 없습니다.");
        	else {
        		this.ds_log.set_rowposition(row);
        		this.edt_startrow.set_value(row);
        		this.edt_go.set_value(this.ds_log.getColumn(row,"rownum"));
        	}
        };

        this.btnGo_onclick = function(obj,e)
        {
        	var row = this.ds_log.findRow("rownum",this.edt_go.value,0);
        	this.ds_log.set_rowposition(row);
        };

        this.tabLog_Tabpage3_grd_msg_oncelldblclick = function(obj,e)
        {
        	var rownum = this.ds_confirm_log.getColumn(e.row,"rownum");
        	var row = this.ds_log.findRow("rownum",rownum,0);
        	this.ds_log.set_rowposition(row);
        };

        this.btn_help_onclick = function(obj,e)
        {
        	if (this.grd_help.visible)
        		this.grd_help.set_visible(false);
        	else
        		this.grd_help.set_visible(true);
        };

        this.grd_help_oncelldblclick = function(obj,e)
        {
        	var str = this.edt_find.value?this.edt_find.value:"";
        	var exprcode = this.ds_help.getColumn(e.row,"code");
        	if ( exprcode == 0 ) {
        		str = "";
        	} else {
        		str =  str + this.ds_help.getColumn(e.row,"expr");
        	}
        	this.edt_find.set_value(str);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_fileopen.addEventHandler("onclick",this.btn_fileopen_onclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btnLoadText.addEventHandler("onclick",this.btnLoadText_onclick,this);
            this.tabLog.Tabpage3.form.grd_msg.addEventHandler("oncelldblclick",this.tabLog_Tabpage3_grd_msg_oncelldblclick,this);
            this.btnReplace.addEventHandler("onclick",this.btnReplace_onclick,this);
            this.btnFind.addEventHandler("onclick",this.btnFind_onclick,this);
            this.btnGo.addEventHandler("onclick",this.btnGo_onclick,this);
            this.btn_help.addEventHandler("onclick",this.btn_help_onclick,this);
            this.grd_help.addEventHandler("oncelldblclick",this.grd_help_oncelldblclick,this);
            this.vf_log.addEventHandler("onerror",this.vf_log_onerror,this);
            this.vf_log.addEventHandler("onsuccess",this.vf_log_onsuccess,this);
            this.fd_log.addEventHandler("onclose",this.fd_log_onclose,this);
        };
        this.loadIncludeScript("traceLog.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
