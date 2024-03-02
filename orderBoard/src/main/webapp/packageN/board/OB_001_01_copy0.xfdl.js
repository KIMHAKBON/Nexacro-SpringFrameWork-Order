(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_02");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01_02","54","25","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_custNm","185","26","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","47","180","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("cbo_addr","184","181","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_01","52","75","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_phone","184","76","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02","47","127","119","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("생년월일(사업자번호)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_birBizNo","184","128","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","48","298","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주문 상품");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","184","295","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_itemNm_innerdataset = new nexacro.NormalDataset("cbo_itemNm_innerdataset", obj);
            cbo_itemNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">주문대기</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">주문접수</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">주문취</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">설치완료</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">설치취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_itemNm_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","48","238","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","184","235","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_custGbNm_innerdataset = new nexacro.NormalDataset("cbo_custGbNm_innerdataset", obj);
            cbo_custGbNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">주문대기</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">주문접수</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">주문취</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">설치완료</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">설치취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_custGbNm_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","77","360","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","234","359","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",430,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("OB_001_01_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
