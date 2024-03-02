package com.nexacro.orderBoard.object;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. -
 * @package com.nexacro.orderBoard.object
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2017. 11. 20.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2017. 11. 20. TOBESOFT
 *      최초작성
 */
public class NexacroBase implements DataSetRowTypeAccessor {

	private int rowType;

	@Override
	public int getRowType() {
		return this.rowType;
	}

	@Override
	public void setRowType(int rowType) {
		this.rowType = rowType;
	}

}
