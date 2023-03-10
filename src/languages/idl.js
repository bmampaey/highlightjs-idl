/*
Language: Interactive Data Language
Description: Interactive Data Language or IDL® is a proprietary software from L3HARRIS for data visualisation
Website: https://www.l3harrisgeospatial.com/Software-Technology/IDL
Author: Benjamin Mampaey
*/

export default function(hljs) {
  const regex = hljs.regex;
  const RESERVED_WORDS = ['AND', 'BEGIN', 'BREAK', 'CASE', 'COMMON', 'COMPILE_OPT', 'CONTINUE', 'DO', 'ELSE', 'END', 'ENDCASE', 'ENDELSE', 'ENDFOR', 'ENDIF', 'ENDREP', 'ENDSWITCH', 'ENDWHILE', 'EQ', 'FOR', 'FORWARD_FUNCTION', 'FUNCTION', 'GE', 'GOTO', 'GT', 'IF', 'INHERITS', 'LE', 'LT', 'MOD', 'NE', 'NOT', 'OF', 'ON_IOERROR', 'OR', 'PRO', 'REPEAT', 'SWITCH', 'THEN', 'UNTIL', 'WHILE', 'XOR'];

  const BUILT_INS = ["a_correlate", "abs", "acos", "adapt_hist_equal", "alog", "alog10", "amoeba", "annotate", "arg_present", "array_equal", "arrow", "ascii_template", "asin", "assoc", "atan", "axis", "bar_plot", "beseli", "beselj", "beselk", "besely", "beta", "bilinear", "bin_date", "binary_template", "bindgen", "binomial", "blas_axpy", "blk_con", "box_cursor", "break", "breakpoint", "broyden", "bytarr", "byte", "byteorder", "bytscl", "c_correlate", "caldat", "calendar", "call_external", "call_function", "call_method", "call_procedure", "catch", "cd", "ceil", "chebyshev", "check_math", "chisqr_cvf", "chisqr_pdf", "choldc", "cholsol", "cindgen", "cir_3pnt", "close", "clust_wts", "cluster", "color_convert", "color_quan", "colormap_applicable", "comfit", "common", "complex", "complexarr", "complexround", "compute_mesh_normals", "cond", "congrid", "conj", "constrained_min", "contour", "convert_coord", "convol", "coord2to3", "correlate", "cos", "cosh", "cramer", "create_struct", "create_view", "crossp", "crvlength", "ct_luminance", "cti_test", "cursor", "curvefit", "cv_coord", "cvttobm", "cw_animate", "cw_animate_getp", "cw_animate_load", "cw_animate_run", "cw_arcball", "cw_bgroup", "cw_clr_index", "cw_colorsel", "cw_defroi", "cw_field", "cw_filesel", "cw_form", "cw_fslider", "cw_light_editor", "cw_light_editor_get", "cw_light_editor_set", "cw_orient", "cw_palette_editor", "cw_palette_editor_get", "cw_palette_editor_set", "cw_pdmenu", "cw_rgbslider", "cw_tmpl", "cw_zoom", "dblarr", "dcindgen", "dcomplex", "dcomplexarr", "define_key", "defroi", "defsysv", "delete_symbol", "dellog", "delvar", "deriv", "derivsig", "determ", "device", "dfpmin", "dialog_message", "dialog_pickfile", "dialog_printersetup", "dialog_printjob", "dialog_read_image", "dialog_write_image", "digital_filter", "dilate", "dindgen", "dissolve", "dist", "dlm_load", "dlm_register", "do_apple_script", "doc_library", "double", "draw_roi", "efont", "eigenql", "eigenvec", "elmhes", "empty", "enable_sysrtn", "eof", "erase", "erode", "errorf", "errplot", "execute", "exit", "exp", "expand", "expand_path", "expint", "extrac", "extract_slice", "f_cvf", "f_pdf", "factorial", "fft", "file_chmod", "file_delete", "file_expand_path", "file_mkdir", "file_test", "file_which", "filepath", "findfile", "findgen", "finite", "fix", "flick", "float", "floor", "flow3", "fltarr", "flush", "for", "format_axis_values", "forward_function", "free_lun", "fstat", "fulstr", "funct", "fv_test", "fx_root", "fz_roots", "gamma", "gamma_ct", "gauss_cvf", "gauss_pdf", "gauss2dfit", "gaussfit", "gaussint", "get_drive_list", "get_kbrd", "get_lun", "get_screen_size", "get_symbol", "getenv", "goto", "grid_tps", "grid3", "gs_iter", "h_eq_ct", "h_eq_int", "hanning", "heap_gc", "help", "hilbert", "hist_2d", "hist_equal", "histogram", "hls", "hough", "hqr", "hsv", "ibeta", "identity", "idl_container", "idlanroi", "idlanroigroup", "idlffdicom", "idlffdxf", "idlfflanguagecat", "idlffshape", "idlgraxis", "idlgrbuffer", "idlgrclipboard", "idlgrcolorbar", "idlgrcontour", "idlgrfont", "idlgrimage", "idlgrlegend", "idlgrlight", "idlgrmodel", "idlgrmpeg", "idlgrpalette", "idlgrpattern", "idlgrplot", "idlgrpolygon", "idlgrpolyline", "idlgrprinter", "idlgrroi", "idlgrroigroup", "idlgrscene", "idlgrsurface", "idlgrsymbol", "idlgrtessellator", "idlgrtext", "idlgrview", "idlgrviewgroup", "idlgrvolume", "idlgrvrml", "idlgrwindow", "igamma", "image_cont", "image_statistics", "imaginary", "indgen", "int_2d", "int_3d", "int_tabulated", "intarr", "interpol", "interpolate", "invert", "ioctl", "ishft", "isocontour", "isosurface", "journal", "julday", "keyword_set", "krig2d", "kurtosis", "kw_test", "l64indgen", "label_date", "label_region", "ladfit", "laguerre", "leefilt", "legendre", "linbcg", "lindgen", "linfit", "linkimage", "live_contour", "live_control", "live_destroy", "live_export", "live_image", "live_info", "live_line", "live_load", "live_oplot", "live_plot", "live_print", "live_rect", "live_style", "live_surface", "live_text", "ljlct", "ll_arc_distance", "lmfit", "lmgr", "lngamma", "lnp_test", "loadct", "locale_get", "lon64arr", "lonarr", "long", "long64", "lsode", "lu_complex", "ludc", "lumprove", "lusol", "m_correlate", "machar", "make_array", "make_dll", "map_2points", "map_continents", "map_grid", "map_image", "map_patch", "map_proj_info", "map_set", "matrix_multiply", "md_test", "mean", "meanabsdev", "median", "memory", "mesh_clip", "mesh_decimate", "mesh_issolid", "mesh_merge", "mesh_numtriangles", "mesh_obj", "mesh_smooth", "mesh_surfacearea", "mesh_validate", "mesh_volume", "message", "min_curve_surf", "mk_html_help", "modifyct", "moment", "morph_close", "morph_distance", "morph_gradient", "morph_hitormiss", "morph_open", "morph_thin", "morph_tophat", "mpeg_close", "mpeg_open", "mpeg_put", "mpeg_save", "msg_cat_close", "msg_cat_compile", "msg_cat_open", "multi", "n_elements", "n_params", "n_tags", "newton", "norm", "obj_class", "obj_destroy", "obj_isa", "obj_new", "obj_valid", "objarr", "on_error", "on_ioerror", "online_help", "open", "openr", "openw", "oplot", "oploterr", "p_correlate", "particle_trace", "pcomp", "plot", "plot_3dbox", "plot_field", "ploterr", "plots", "pnt_line", "point_lun", "polar_contour", "polar_surface", "poly", "poly_2d", "poly_area", "poly_fit", "polyfill", "polyfillv", "polyshade", "polywarp", "popd", "powell", "primes", "print", "printf", "printd", "profile", "profiler", "profiles", "project_vol", "ps_show_fonts", "psafm", "pseudo", "ptr_free", "ptr_new", "ptr_valid", "ptrarr", "pushd", "qromb", "qromo", "qsimp", "r_correlate", "r_test", "radon", "randomn", "randomu", "ranks", "rdpix", "read", "readf", "read_ascii", "read_binary", "read_bmp", "read_dicom", "read_image", "read_interfile", "read_jpeg", "read_pict", "read_png", "read_ppm", "read_spr", "read_srf", "read_sylk", "read_tiff", "read_wav", "read_wave", "read_x11_bitmap", "read_xwd", "reads", "readu", "rebin", "recall_commands", "recon3", "reduce_colors", "reform", "regress", "replicate", "replicate_inplace", "resolve_all", "resolve_routine", "restore", "retall", "return", "reverse", "rewind", "rk4", "roberts", "rot", "rotate", "round", "routine_info", "rs_test", "s_test", "save", "savgol", "scale3", "scale3d", "search2d", "search3d", "set_plot", "set_shading", "set_symbol", "setenv", "setlog", "setup_keys", "sfit", "shade_surf", "shade_surf_irr", "shade_volume", "shift", "show3", "showfont", "sin", "sindgen", "sinh", "size", "skewness", "skipf", "slicer3", "slide_image", "smooth", "sobel", "socket", "sort", "spawn", "sph_4pnt", "sph_scat", "spher_harm", "spl_init", "spl_interp", "spline", "spline_p", "sprsab", "sprsax", "sprsin", "sprstp", "sqrt", "standardize", "stddev", "stop", "strarr", "strcmp", "strcompress", "streamline", "stregex", "stretch", "string", "strjoin", "strlen", "strlowcase", "strmatch", "strmessage", "strmid", "strpos", "strput", "strsplit", "strtrim", "struct_assign", "struct_hide", "strupcase", "surface", "surfr", "svdc", "svdfit", "svsol", "swap_endian", "switch", "systime", "t_cvf", "t_pdf", "t3d", "tag_names", "tan", "tanh", "taprd", "tapwrt", "tek_color", "temporary", "tetra_clip", "tetra_surface", "tetra_volume", "thin", "threed", "time_test2", "timegen", "tm_test", "total", "trace", "transpose", "tri_surf", "triangulate", "trigrid", "triql", "trired", "trisol", "trnlog", "ts_coef", "ts_diff", "ts_fcast", "ts_smooth", "tv", "tvcrs", "tvlct", "tvrd", "tvscl", "uindgen", "uint", "uintarr", "ul64indgen", "ulindgen", "ulon64arr", "ulonarr", "ulong", "ulong64", "uniq", "usersym", "value_locate", "variance", "vax_float", "vector_field", "vel", "velovect", "vert_t3d", "voigt", "voronoi", "voxel_proj", "wait", "warp_tri", "watershed", "wdelete", "weof", "wf_draw", "where", "widget_base", "widget_button", "widget_control", "widget_draw", "widget_droplist", "widget_event", "widget_info", "widget_label", "widget_list", "widget_slider", "widget_table", "widget_text", "window", "write_bmp", "write_image", "write_jpeg", "write_nrif", "write_pict", "write_png", "write_ppm", "write_spr", "write_srf", "write_sylk", "write_tiff", "write_wav", "write_wave", "writeu", "wset", "wshow", "wtn", "wv_applet", "wv_cw_wavelet", "wv_cwt", "wv_denoise", "wv_dwt", "wv_fn_coiflet", "wv_fn_daubechies", "wv_fn_gaussian", "wv_fn_haar", "wv_fn_morlet", "wv_fn_paul", "wv_fn_symlet", "wv_import_data", "wv_import_wavelet", "wv_plot3d_wps", "wv_plot_multires", "wv_pwt", "wv_tool_denoise", "xbm_edit", "xdisplayfile", "xdxf", "xfont", "xinteranimate", "xloadct", "xmanager", "xmng_tmpl", "xmtool", "xobjview", "xpalette", "xpcolor", "xplot3d", "xregistered", "xroi", "xsq_test", "xsurface", "xvaredit", "xvolume", "xvolume_rotate", "xvolume_write_image", "xyouts", "zoom", "zoom_24"];

  const LITERALS = ["!CPU", "!DIR", "!DLM_PATH", "!DPI", "!DTOR", "!EDIT_INPUT", "!ERR", "!ERROR", "!ERROR_STATE", "!ERR_STRING", "!EXCEPT", "!HELP_PATH", "!JOURNAL", "!MAKE_DLL", "!MAP", "!MORE", "!MOUSE", "!MSG_PREFIX", "!PATH", "!PI", "!PROMPT", "!QUIET", "!RADEG", "!SYSERROR", "!SYSERR_STRING", "!VALUES", "!VERSION", "!WARN"];

  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+|![A-Za-z]\w+/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
  };

  const PROMPT = {
    className: 'meta',
    begin: /^(IDL)>/
  };

  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };

  const digitpart = '[0-9]+';
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead = `\\b|${RESERVED_WORDS.join('|')}`;
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eEdD][+-]?(${digitpart})(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[dD]?`
      },
      {
        begin: `\\b(${digitpart})([Bb]|[uU]|[sS]|[uU][sS]|[lL]|[uU][lL]|[lL][lL]|[uU][lL][lL])?(?=${lookahead})`
      }
    ]
  };
  return {
    name: 'Interactive Data Language',
    aliases: [
      'idl',
    ],
    case_insensitive: true,
    unicodeRegex: false,
    keywords: KEYWORDS,
    contains: [
      PROMPT,
      NUMBER,
      STRING,
      hljs.COMMENT(';', '$')
    ]
  };
}
