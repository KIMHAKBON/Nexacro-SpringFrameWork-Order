(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_titletext("frameLogin");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">test1</Col><Col id=\"USER_PASSWORD\">test1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"groupId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sortNo\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"auth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000005</Col><Col id=\"menuNm\">샘플</Col><Col id=\"menuUrl\"/><Col id=\"sortNo\">6</Col><Col id=\"upMenuId\">SA00000001</Col><Col id=\"useYn\">Y</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000020</Col><Col id=\"menuNm\">조회/입력/수정/삭제 예제</Col><Col id=\"menuUrl\">pattern::pattern01-transaction.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YNNNNY</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000240</Col><Col id=\"menuNm\">엑셀 처리 예제</Col><Col id=\"menuUrl\">pattern::pattern02-excel.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYNY</Col></Row><Row><Col id=\"menuNm\">파일 예제</Col><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000190</Col><Col id=\"menuUrl\">pattern::pattern03-FileUpTransfer.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col><Col id=\"useYn\">Y</Col><Col id=\"auth\">YYYYYY</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"groupId\">SA00000005</Col><Col id=\"menuId\">SA00000330</Col><Col id=\"menuNm\">FileTransfer 예제</Col><Col id=\"menuUrl\">sample::sampleFileUpDownloadTrans.xfdl</Col><Col id=\"sortNo\">1</Col><Col id=\"upMenuId\">SA00000005</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","40","2","500","225",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","118","87","60","20",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_background("darkblue");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("aliceblue");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edId","180","87","140","20",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_value("test1");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static01","118","109","60","20",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호");
            obj.set_background("darkblue");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_color("aliceblue");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edPw","180","109","140","20",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_value("test1");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","322","87","71","41",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_borderRadius("5px");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn_join","121","140","160","39",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("헬스체크테스트");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLogin.form.edId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLogin.form.edPw","value","dsSearch","USER_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLogin.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		frameWork.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.01.23
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.01.23     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        this.objApp;
        this.objMainframe;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication() ;
        	this.objMainframe = this.objApp.mainframe ;

        	this.form_onsize();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * form onsize 변경시
        * @return
        * @example
        * @memberOf public
        */
        this.form_onsize = function()
        {
        	var nLeft = (this.objMainframe.width / 2) - Math.round((this.divLogin.form.getOffsetWidth()) / 2);
        	var nTop = (this.objMainframe.height / 2) - Math.round((this.divLogin.form.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.divLogin.form.setOffsetLeft(0);
        	}
        	else
        	{
        		this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        };

        /**
        * fnSetSeprateFrame
        * @return
        * @example
        * @memberOf
        */
        this.fnSetSeprateFrame = function()
        {
        	this.objApp.gvVFrameSet.set_separatesize("44,0,*,20");

        	//gloval variable 회사세팅
        	nexacro.setEnvironmentVariable("gvUserId", this.objApp.gdsUserInfo.getColumn(0,"userId"));
        	nexacro.setEnvironmentVariable("gvUserNm", this.objApp.gdsUserInfo.getColumn(0,"UserNm"));

        	//topframe argument setting
        	this.objApp.gvTopFrame.form.fnLoad();
        	this.objApp.gvTopFrame.form.fnSetName();

        	//this.objApp.gvLeftFrame.form.divLeft.form.grdTree.set_binddataset("gdsMenu");
        	//this.objApp.gvLeftFrame.form.fnSetTreeStatus();

        	//mainform 메인화면 구성 데이터 조회
        	//application.gvWorkFrame.frames["MainForm"].form.fn_selectComposition();
        }
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.Form_onsize = function(obj,e)
        {
        	this.form_onsize();
        };

        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	//로컬환경에서 global dataset으로 화면열기
        	if (nexacro.getEnvironmentVariable("gvRunMode") == "0" || nexacro.getEnvironmentVariable("gvRunMode") == "1")
        	{
        		//sample화면 메뉴에 추가
        		for (var i=0; i< this.dsSample.rowcount; i++)
        		{
        			var nRow = this.objApp.gdsMenu.addRow();
        			this.objApp.gdsMenu.copyRow(nRow, this.dsSample, i);
        		}

        		this.fnSetSeprateFrame();
        	}else{
        		this.fnLogin();	//서버와통신
        	}

        	this.objApp.gvLeftFrame.form.fnGlobalMenuCopy();
        };

        /**
         * 로그인 transaction
         * @param {string} reLoginYn
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnLogin = function()
        {
        	var strSvcId    = "login";
        	var strSvcUrl   = "login.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";


        	//생략가능
        	var isAsync   = true;
        	var nDataType = 0;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc, 	// transaction의 결과를 받을 Function 이름
        								nDataType); // 통신방법 정의 [생략가능]
        }

        /**************************************************************************************************
        * CallBack Function (서버수신)
        ***************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        		case "login":
        			if(this.dsList.rowcount == 1 ){
        				var sResult = this.dsList.getColumn(0, "LOGIN_RESULT");
        				if (sResult == "LOGIN_SUCCESS"){
        					//sample화면 메뉴에 추가
        					for (var i=0; i< this.dsSample.rowcount; i++)
        					{
        						var nRow = this.objApp.gdsMenu.addRow();
        						this.objApp.gdsMenu.copyRow(nRow, this.dsSample, i);
        					}

        					this.fnSetSeprateFrame();
        					return;
        				}
        			}
        			alert("로그인에 실패하였습니다.");
        			break;

        		case "save":
        			this.fnSearch();//재조회
        			break;

        		case "healthCheck":
        			//재조회
        			trace(this.dsList.getColumn(0,"result"));
        			break;
        	}
        };
        this.divLogin_btn_join_onclick = function(obj,e)
        {
        	var strSvcId    = "healthCheck";
        	var strSvcUrl   = "healthCheck.do";
        	var inData      = "";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsList.clearData();
        	//생략가능
        	var isAsync   = true;
        	var nDataType = 0;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc 	// trnsaction의 결과를 받을 Function 이름
        								); // 통신방법 정의 [생략가능]z
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.Form_onsize,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.btn_join.addEventHandler("onclick",this.divLogin_btn_join_onclick,this);
        };
        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
