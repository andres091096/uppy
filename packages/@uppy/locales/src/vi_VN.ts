import type { Locale } from '@uppy/utils/lib/Translator'

const vi_VN: Locale<0 | 1> = {
  strings: {},
  pluralize(n) {
    if (n === 1) {
      return 0
    }
    return 1
  },
}

vi_VN.strings = {
  addMore: 'Thêm',
  addMoreFiles: 'Thêm tập tin',
  addingMoreFiles: 'Đang thêm các tập tin',
  allowAccessDescription:
    'Để chụp ảnh hoặc quay video bằng camera, vui lòng cho phép trang web truy cập camera.',
  allowAccessTitle: 'Vui lòng cho phép truy cập camera',
  authenticateWith: 'Kết nối đến %{pluginName}',
  authenticateWithTitle: 'Xác thực với %{pluginName} để chọn tập tin',
  back: 'Quay lại',
  browse: 'chọn',
  browseFiles: 'chọn',
  cancel: 'Huỷ',
  cancelUpload: 'Huỷ tải lên',
  chooseFiles: 'Chọn tập tin',
  closeModal: 'Đóng cửa sổ',
  companionError: 'Kết nối thất bại',
  companionUnauthorizeHint:
    'Để huỷ uỷ quyền tài khoản %{provider}, truy cập %{url}',
  complete: 'Xong',
  connectedToInternet: 'Đã kết nối Internet',
  copyLink: 'Sao chép liên kết',
  copyLinkToClipboardFallback: 'Sao chép liên kết dưới',
  copyLinkToClipboardSuccess: 'Đã chép liên kết vào bộ nhớ tạm',
  creatingAssembly: 'Đang chuẩn bị tải lên...',
  creatingAssemblyFailed: 'Transloadit: Không thể tạo nhóm',
  dashboardTitle: 'Trình đăng tải tập tin',
  dashboardWindowTitle: 'Cửa sổ tải lên (Ấn ESC để đóng)',
  dataUploadedOfTotal: '%{complete} trong số %{total}',
  done: 'Xong',
  dropHereOr: 'Thả tập tin hoặc %{browse}',
  dropHint: 'Thả tập tin vào đây',
  dropPasteBoth: 'Thả tập tin vào đây, dán hoặc %{browse}',
  dropPasteFiles: 'Thả tập tin vào đây, dán hoặc %{browse}',
  dropPasteFolders: 'Thả tập tin vào đây, dán hoặc %{browse}',
  dropPasteImportBoth: 'Thả tập tin vào đây, dán, %{browse} hoặc nhập từ',
  dropPasteImportFiles: 'Thả tập tin vào đây, dán, %{browse} hoặc nhập từ',
  dropPasteImportFolders: 'Thả tập tin vào đây, dán, %{browse} hoặc nhập từ',
  editFile: 'Sửa tập tin',
  editing: 'Đang sửa %{file}',
  emptyFolderAdded: 'Không có tập tin nào được thêm từ thư mục trống',
  encoding: 'Đang encode...',
  enterCorrectUrl:
    'URL sai: Đảm bảo rằng bạn đang nhập một liên kết trực tiếp đến một tập tin',
  enterUrlToImport: 'Nhập URL để nhập tập tin',
  exceedsSize: 'Tập tin này vượt quá kích thước tối đa cho phép của %{size}',
  failedToFetch: 'Thất bại khi lấy từ URL, hãy sửa lại cho đúng',
  failedToUpload: 'Tải lên %{file} thất bại',
  fileSource: 'Nguồn tập tin: %{name}',
  filesUploadedOfTotal: {
    '0': '%{complete} trong số %{smart_count} tập tin đã được tải lên',
    '1': '%{complete} trong số %{smart_count} tập tin đã được tải lên',
  },
  filter: 'Bộ lọc',
  finishEditingFile: 'Hoàn tất chỉnh sửa tập tin',
  folderAdded: {
    '0': 'Đã thêm %{smart_count} tập tin từ %{folder}',
    '1': 'Đã thêm %{smart_count} tập tin từ %{folder}',
  },
  generatingThumbnails: 'Đang tạo ảnh thu nhỏ...',
  import: 'Nhập',
  importFrom: 'Nhập từ %{name}',
  loading: 'Đang tải...',
  logOut: 'Đăng xuất',
  myDevice: 'Thiết bị của tôi',
  noFilesFound: 'Không có tập tin hoặc thư mục nào',
  noInternetConnection: 'Không có kết nối Internet',
  openFolderNamed: 'Mở thư mục %{name}',
  pause: 'Tạm dừng',
  pauseUpload: 'Tạm dừng tải lên',
  paused: 'Đã tạm dừng',
  poweredBy: 'Cung cấp bởi %{uppy}',
  processingXFiles: {
    '0': 'Đang xử lí %{smart_count} tập tin',
    '1': 'Đang xử lí %{smart_count} tập tin',
  },
  recordingLength: 'Thời lượng ghi %{recording_length}',
  removeFile: 'Bỏ tập tin',
  resetFilter: 'Đặt lại bộ lọc',
  resume: 'Tiếp tục',
  resumeUpload: 'Tiếp tục tải lên',
  retry: 'Thử lại',
  retryUpload: 'Tải lên lại',
  saveChanges: 'Lưu các thay đổi',
  selectFileNamed: 'Chọn tập tin %{name}',
  selectX: {
    '0': 'Chọn %{smart_count}',
    '1': 'Chọn %{smart_count}',
  },
  smile: 'Cười lên!',
  startRecording: 'Bắt đầu thu hình',
  stopRecording: 'Dừng thu hình',
  takePicture: 'Chụp ảnh',
  timedOut: 'Tải lên bị đình trệ %{seconds} giây, đang huỷ.',
  unselectFileNamed: 'Bỏ chọn tập tin %{name}',
  upload: 'Tải lên',
  uploadComplete: 'Tải lên hoàn tất',
  uploadFailed: 'Tải lên thất bại',
  uploadPaused: 'Đã tạm dừng tải lên',
  uploadXFiles: {
    '0': 'Tải lên %{smart_count} tập tin',
    '1': 'Tải lên %{smart_count} tập tin',
  },
  uploadXNewFiles: {
    '0': 'Tải lên +%{smart_count} tập tin',
    '1': 'Tải lên +%{smart_count} tập tin',
  },
  uploading: 'Uploading',
  uploadingXFiles: {
    '0': 'Đang tải lên %{smart_count} tập tin',
    '1': 'Đang tải lên %{smart_count} tập tin',
  },
  xFilesSelected: {
    '0': 'Đã chọn %{smart_count} tập tin',
    '1': 'Đã chọn %{smart_count} tập tin',
  },
  xMoreFilesAdded: {
    '0': 'Đã thêm %{smart_count} tập tin',
    '1': 'Đã thêm %{smart_count} tập tin',
  },
  xTimeLeft: '%{time} left',
  youCanOnlyUploadFileTypes: 'Chỉ có thể tải lên: %{types}',
  youCanOnlyUploadX: {
    '0': 'Chỉ có thể tải lên %{smart_count} tập tin',
    '1': 'Chỉ có thể tải lên %{smart_count} tập tin',
  },
  youHaveToAtLeastSelectX: {
    '0': 'Chọn ít nhất %{smart_count} tập tin',
    '1': 'Chọn ít nhất %{smart_count} tập tin',
  },
}

// TODO: remove this in the next major?
// @ts-expect-error Uppy can be a global in legacy bundle
if (typeof Uppy !== 'undefined') {
  // @ts-expect-error Uppy can be a global in legacy bundle
  globalThis.Uppy.locales.vi_VN = vi_VN
}

export default vi_VN
