#pragma checksum "C:\Users\Professional\source\repos\WebApplication4\WebApplication4\Views\Services\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "987928eefe7886d78f9e9fb0a60cc9198ac9f27d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Services_Details), @"mvc.1.0.view", @"/Views/Services/Details.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Professional\source\repos\WebApplication4\WebApplication4\Views\_ViewImports.cshtml"
using WebApplication4;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Professional\source\repos\WebApplication4\WebApplication4\Views\_ViewImports.cshtml"
using WebApplication4.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"987928eefe7886d78f9e9fb0a60cc9198ac9f27d", @"/Views/Services/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9fff4eb847734ec2c3f91807e9b1a08bbda85e45", @"/Views/_ViewImports.cshtml")]
    public class Views_Services_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "Sections/_BreadCrumbSection", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("#"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("subscribe_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "987928eefe7886d78f9e9fb0a60cc9198ac9f27d4696", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"

<section class=""service_details_page_section"">
    <div class=""container"">
        <div class=""row"">
            <div class=""col-lg-8 offset-lg-2 text-center"">
                <h5 class=""sub_title"">Helping ambition brands growing</h5>
                <h2 class=""sec_title"">
                    Business hand in hand with our technology. We <span class=""fw_400 td_underline"">design spaces</span> will make
                    you fall in love with <span class=""fw_400 td_underline secondary_color"">work again</span>.
                </h2>
            </div>
        </div>
        <div class=""row"">
            <div class=""col-md-12 col-lg-8"">
                <div class=""service_thumb"">
                    <img src=""assets/images/services/19.jpg""");
            BeginWriteAttribute("alt", " alt=\"", 811, "\"", 817, 0);
            EndWriteAttribute();
            WriteLiteral(@" />
                </div>
            </div>
            <div class=""col-md-12 col-lg-4"">
                <div class=""service_details"">
                    <i class=""flaticon-crane""></i>
                    <h3>Petroleum and Gas</h3>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div class=""row mt92"">
            <div class=""col-md-4 col-lg-4"">
                <div class=""icon_box_02"">
                    <svg height=""49"" viewBox=""0 0 21 21"" width=""49"" xmlns=""http://www.w3.org/2000/svg"">");
            WriteLiteral(@"
                        <g fill=""none"" fill-rule=""evenodd"" transform=""matrix(0 -1 1 0 1.5 18.5)"">
                            <path d=""m2.5.5h3c1.1045695 0 2 .8954305 2 2v13c0 1.1045695-.8954305 2-2 2h-3c-1.1045695 0-2-.8954305-2-2v-13c0-1.1045695.8954305-2 2-2z"" stroke-linecap=""round"" stroke-linejoin=""round"" />
                            <circle cx=""4"" cy=""4"" r=""1"" />
                            <path d=""m9.50624332.5000411 2.99999998.00936502c1.1021268.00344048 1.9937567.89785814 1.9937567 1.99999026v12.99057222c0 1.1045695-.8954305 2-2 2-.0020811 0-.0041622-.0000032-.0062433-.0000097l-3.00000002-.009365c-1.10212675-.0034405-1.99375668-.8978582-1.99375668-1.9999903v-12.99057225c0-1.1045695.8954305-2 2-2 .00208111 0 .00416222.00000325.00624332.00000975z"" stroke-linecap=""round"" stroke-linejoin=""round"" />
                            <circle cx=""11"" cy=""4"" r=""1"" />
                        </g>
                    </svg>
                    <h3>UX recherche</h3>
                    <p>
              ");
            WriteLiteral(@"          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div class=""col-md-4 col-lg-4"">
                <div class=""icon_box_02"">
                    <svg class=""mb18"" height=""49"" viewBox=""0 0 21 21"" width=""49"" xmlns=""http://www.w3.org/2000/svg"">
                        <g fill=""none"" fill-rule=""evenodd"" stroke-linecap=""round"" stroke-linejoin=""round"" transform=""translate(2 2)"">
                            <path d=""m5.5.5h6v5h-6z"" />
                            <path d=""m10.5 11.5h6v5h-6z"" />
                            <path d=""m.5 11.5h6v5h-6z"" />
                            <path d=""m3.498 11.5v-3h10v3"" />
                            <path d=""m8.5 8.5v-3"" />
                        </g>
                    </svg>
                    <h3>UI design</h3>
                    <p>
                        Dolor sit amet, consectetur adipiscing elit, sed d");
            WriteLiteral(@"o eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div class=""col-md-4 col-lg-4"">
                <div class=""icon_box_02"">
                    <svg class=""mb14 mlm7"" height=""49"" viewBox=""0 0 21 21"" width=""49"" xmlns=""http://www.w3.org/2000/svg"">
                        <g fill=""none"" fill-rule=""evenodd"" stroke-linecap=""round"" stroke-linejoin=""round"" transform=""translate(3 2)"">
                            <path d=""m.5 9v3.5c0 1.1045695.8954305 2 2 2h7c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-3.5"" transform=""matrix(0 1 -1 0 15 3)"" />
                            <path d=""m11.5.5v6"" />
                            <path d=""m11.5.5v6"" transform=""matrix(0 1 -1 0 15 -8)"" />
                        </g>
                    </svg>
                    <h3>Supporting sucess</h3>
                    <p>
                        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu");
            WriteLiteral(@"nt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
        <div class=""row mt27"">
            <div class=""col-lg-12"">
                <h3 class=""service_heading"">Social Good. Financial Success</h3>
            </div>
            <div class=""col-md-6 col-lg-6"">
                <div class=""sd_desc_left"">
                    <p>
                        <span class=""secondary_color large_fonts"">Ut enim ad minim veniam,</span> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, <span class=""dark_color td_underline"">sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </p>
                </div>
            </div>
    ");
            WriteLiteral(@"        <div class=""col-md-6 col-lg-6"">
                <div class=""sd_desc_right"">
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


<section class=""subscribe_section"">
    <div class=""container"">
        <div class=""row"">
            <div class=""col-md-5 col-lg-3 noPaddingRight"">
                <h2>NewsLetter</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div class=""col-md-7 col-lg-6 offset-lg-3"">
                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "987928eefe7886d78f9e9fb0a60cc9198ac9f27d13051", async() => {
                WriteLiteral("\r\n                    <input type=\"email\" name=\"sub_email\" placeholder=\"Enter your email\">\r\n                    <button type=\"submit\">Message Us</button>\r\n                ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
