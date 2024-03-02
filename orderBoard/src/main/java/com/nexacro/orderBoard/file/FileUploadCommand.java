package com.nexacro.orderBoard.file;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다.
 * 
 *       - FileUploadCommand Class
 * @package com.nexacro.orderBoard.file
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2019. 10. 18.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2019. 10. 18. TOBESOFT
 *      최초작성
 */
public class FileUploadCommand {

	// 파일 업로드 시 FileUpTransfer 콤포넌트에서 addFile("이름", file)
	// 처리 시 "이름"에 매핑되어서 처리 함.(nexacroUploadFiles)
	private List<MultipartFile> nexacroUploadFiles;

	// 파일 다운로드시 파일명과 매핑.
	private String fileName;

	public List<MultipartFile> getNexacroUploadFiles() {
		return nexacroUploadFiles;
	}

	public void setNexacroUploadFiles(List<MultipartFile> nexacroUploadFiles) {
		this.nexacroUploadFiles = nexacroUploadFiles;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
}
