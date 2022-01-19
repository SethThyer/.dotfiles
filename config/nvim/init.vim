call plug#begin()

Plug 'neovim/nvim-lspconfig'                                 " Language server
Plug 'williamboman/nvim-lsp-installer'                       " Language server installer 

Plug 'hrsh7th/cmp-nvim-lsp'                                  " Auto completion 
Plug 'hrsh7th/cmp-buffer'                                    " Auto completion 
Plug 'hrsh7th/cmp-path'                                      " Auto completion 
Plug 'hrsh7th/cmp-cmdline'                                   " Auto completion 
Plug 'hrsh7th/nvim-cmp'                                      " Auto completion

Plug 'hrsh7th/cmp-vsnip'                                     " Snippets
Plug 'hrsh7th/vim-vsnip'                                     " Snippets
Plug 'rafamadriz/friendly-snippets'                          " Snippets
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}  " Syntax highlighting

Plug 'itchyny/lightline.vim'                                 " UI line
Plug 'joshdick/onedark.vim'                                  " ColorScheme
Plug 'andweeb/presence.nvim'                                 " Discord presence

Plug 'jiangmiao/auto-pairs'                                  " Auto create braces
Plug 'tpope/vim-surround'                                    " Surround words (:e ~/$NVIMRC/plugged/vim-surround/doc/surround.txt)
Plug 'asymotion/vim-easymotion'                              " Finding
Plug 'godlygeek/tabular'                                     " Lint for indentation
Plug 'plasticboy/vim-markdown'                               " Markdown syntax highlighting
Plug 'bounceme/poppy.vim'                                    " Highlight parenthesis
Plug 'itchyny/vim-cursorword'                                " Find word under curser (#, *) 
Plug 'ryanoasis/vim-devicons'                                " File Browser > Icons
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'               " File Browser > sytax highlight
Plug 'preservim/nerdtree'                                    " File Browser
Plug 'tpope/vim-eunuch'                                      " Unix commands
Plug 'airblade/vim-gitgutter'                                " Git commands

call plug#end()

let g:completion_enable_auto_popup = 0

if (has("autocmd") && !has("gui_running"))
  augroup colorset
    autocmd!
    let s:white = { "gui": "#ABB2BF", "cterm": "145", "cterm16" : "7" }
    autocmd ColorScheme * call onedark#set_highlight("Normal", { "fg": s:white }) " `bg` will not be styled since there is no `bg` setting
  augroup END
endif

syntax on
colorscheme onedark

set virtualedit=all
filetype plugin indent on
set smarttab
set expandtab
set title
set ai "Auto indent
set si "Smart indent
set wrap
set linebreak 
set backspace=start,eol,indent
set tabstop=2
set shiftwidth=2
set number relativenumber
set mouse=a
set cursorline
set cursorcolumn
set showbreak=↪'.   
set completeopt=menu,menuone,noselect


let mapleader = ","
nnoremap <leader>s :NERDTreeToggle<CR>
imap <F7> <esc>

lua require("lsp_config")
lua require("lsp_cmp")

autocmd BufWritePre *.go lua vim.lsp.buf.formatting()
autocmd BufWritePre *.go lua goimports(1000)
