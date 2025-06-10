use std::mem;
use winapi::um::sysinfoapi::{GetSystemInfo, SYSTEM_INFO};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn show_message() -> String {
    unsafe {
        let mut sys_info: SYSTEM_INFO = mem::zeroed();
        GetSystemInfo(&mut sys_info);

        format!(
            "Processors: {}\nProcessor Type: {}\nPage Size: {}\nProcessor Architecture: {}",
            sys_info.dwNumberOfProcessors,
            sys_info.dwProcessorType,
            sys_info.dwPageSize,
            sys_info.u.s().wProcessorArchitecture
        )
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![show_message])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
