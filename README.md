# Turtle/TriG autocompleter extension for Visual Studio Code

Extension that provides autocomplete for Turtle and TriG files.

## Features

![Demo](https://raw.githubusercontent.com/mightymax/turtle-vocab-autocomplete/main/static/preview.gif)

### Fetching prefixes and their namespace
- Using the Command Palette (command = "Vocabulary Prefix"):
  1. type a prefix in the inputbox; or
  2. make a selection of a prefix in your document before running the command.
- Using Autocomplete for Turtle and/or TriG files:
  - start typing a prefix appended with `@`, e.g. `@schema` and confirm the correct prefix

### Autocomplete from vocabularies
- in a Turtle or Trig file, type the namespace (e.g. `schema:`) to show suggested classes and properties from that vocabulary. 

## List of available vocabularies:
This tool uses [Zazuko's vocabulary project](https://github.com/zazuko/rdf-vocabularies) to generate static JSON files that are used for autocompletion. For these vocabularies, metadata is available. It also uses the data from [prefix.cc](http://prefix.cc) to suggest prefixes not available from Zazuko's project, but without metadata.

Currently these vocabularies are supported with metadata:
- [acl](http://www.w3.org/ns/auth/acl#) ACL
- [as](https://www.w3.org/ns/activitystreams#) Activity Streams 2.0
- [bibo](http://purl.org/ontology/bibo/) The Bibliographic Ontology
- [cc](http://creativecommons.org/ns#) Creative Commons
- [cert](http://www.w3.org/ns/auth/cert#) Ontology for Certificates and crypto stuff.
- [cnt](http://www.w3.org/2011/content#) Representing Content in RDF
- [constant](http://qudt.org/vocab/constant/) QUDT Constants
- [crm](http://www.cidoc-crm.org/cidoc-crm/) CIDOC Conceptual Reference Model
- [csvw](http://www.w3.org/ns/csvw#) CSVW Namespace Vocabulary Terms
- [ctag](http://commontag.org/ns#) Common Tag vocabulary
- [dash-sparql](http://datashapes.org/sparql#) SPARQL Vocabulary for SHACL
- [dash](http://datashapes.org/dash#) DASH Data Shapes Vocabulary
- [dbo](http://dbpedia.org/ontology/) The DBpedia Ontology
- [dc11](http://purl.org/dc/elements/1.1/) Dublin Core Metadata Element Set, Version 1.1
- [dcam](http://purl.org/dc/dcam/) Metadata terms for vocabulary description
- [dcat](http://www.w3.org/ns/dcat#) The data catalog vocabulary
- [dcmitype](http://purl.org/dc/dcmitype/) DCMI Type Vocabulary
- [dcterms](http://purl.org/dc/terms/) DCMI Metadata Terms - other
- [dig](http://www.ics.forth.gr/isl/CRMdig/) CRM Digital
- [discipline](http://qudt.org/vocab/discipline/) QUDT Disciplines Ontology
- [doap](http://usefulinc.com/ns/doap#) Description of a Project (DOAP) vocabulary
- [dpv](http://www.w3.org/ns/dpv#) Data Privacy Vocabulary
- [dqv](http://www.w3.org/ns/dqv#) Data Quality Vocabulary
- [dtype](http://www.linkedmodel.org/schema/dtype#) 
- [duv](http://www.w3.org/ns/duv#) Dataset Usage Vocabulary
- [earl](http://www.w3.org/ns/earl#) Evaluation and Report Language (EARL) 1.0 Schema
- [ebucore](http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#) EBUCore - the Dublin Core for media
- [exif](http://www.w3.org/2003/12/exif/ns#) Exif data description vocabulary
- [foaf](http://xmlns.com/foaf/0.1/) Friend of a Friend (FOAF) vocabulary
- [frbr](http://purl.org/vocab/frbr/core#) Functional Requirements for Bibliographic Records (FRBR)
- [geo](http://www.opengis.net/ont/geosparql#) GeoSPARQL Ontology
- [geof](http://www.opengis.net/def/function/geosparql/) GeoSPARQL Functions
- [geor](http://www.opengis.net/def/rule/geosparql/) GeoSPARQL rules
- [gml](http://www.opengis.net/ont/gml#) 
- [gn](http://www.geonames.org/ontology#) The Geonames ontology
- [gr](http://purl.org/goodrelations/v1#) The GoodRelations Vocabulary for Semantic Web-based E-Commerce
- [grddl](http://www.w3.org/2003/g/data-view#) GRDDL Data Views
- [gs1](https://gs1.org/voc/) GS1 Web Vocabulary
- [gtfs](http://vocab.gtfs.org/terms#) General Transit Feed Specification
- [http](http://www.w3.org/2011/http#) HTTP in RDF
- [hydra](http://www.w3.org/ns/hydra/core#) The Hydra Core Vocabulary
- [ical](http://www.w3.org/2002/12/cal/icaltzd#) Internet Calendaring and Scheduling Core Object Specification (iCalendar)
- [la](https://linked.art/ns/terms/) Linked Art
- [ldp](http://www.w3.org/ns/ldp#) The W3C Linked Data Platform (LDP) Vocabulary
- [list](http://www.w3.org/2000/10/swap/list#) Semantic Web Application Platform - List
- [locn](http://www.w3.org/ns/locn#) ISA Programme Location Core Vocabulary
- [log](http://www.w3.org/2000/10/swap/log#) Semantic Web Application Platform
- [lvont](http://lexvo.org/ontology#) Lexvo.org Ontology
- [m4i](http://w3id.org/nfdi4ing/metadata4ing#) Metadata4Ing: An ontology for describing the generation of research data within a scientific activity.
- [ma](http://www.w3.org/ns/ma-ont#) Ontology for Media Resources
- [mads](http://www.loc.gov/mads/rdf/v1#) MADS/RDF (Metadata Authority Description Schema in RDF)
- [math](http://www.w3.org/2000/10/swap/math#) Semantic Web Application Platform - Math
- [oa](http://www.w3.org/ns/oa#) Web Annotation Ontology
- [og](http://ogp.me/ns#) The Open Graph protocol
- [oidc](http://www.w3.org/ns/solid/oidc#) Solid OIDC
- [org](http://www.w3.org/ns/org#) Core organization ontology
- [owl](http://www.w3.org/2002/07/owl#) The OWL 2 Schema vocabulary (OWL 2)
- [pim](http://www.w3.org/ns/pim/space#) Workspace Ontology
- [prefix](http://qudt.org/vocab/prefix/) QUDT Prefixes Version 2.1 Vocabulary
- [prov](http://www.w3.org/ns/prov#) W3C PROVenance Interchange
- [qb](http://purl.org/linked-data/cube#) Vocabulary for multi-dimensional (e.g. statistical) data publishing
- [qkdv](http://qudt.org/vocab/dimensionvector/) QUDT Dimension Vectors Version 2.1 Vocabulary
- [quantitykind](http://qudt.org/vocab/quantitykind/) QUDT VOCAB Quantity Kinds  Release 2.1.25
- [qudt](http://qudt.org/schema/qudt/) QUDT Schema
- [rdau](http://rdaregistry.info/Elements/u/) RDA Unconstrained properties
- [rdf](http://www.w3.org/1999/02/22-rdf-syntax-ns#) The RDF Concepts Vocabulary (RDF)
- [rdfa](http://www.w3.org/ns/rdfa#) RDFa Vocabulary for Term and Prefix Assignment, and for Processor Graph Reporting
- [rdfs](http://www.w3.org/2000/01/rdf-schema#) The RDF Schema vocabulary (RDFS)
- [rev](http://purl.org/stuff/rev#) RDF Review Vocabulary
- [rico](https://www.ica.org/standards/RiC/ontology#) International Council on Archives Records in Contexts Ontology
            (ICA RiC-O) version 0.2
- [rr](http://www.w3.org/ns/r2rml#) R2RML vocabulary
- [rss](http://purl.org/rss/1.0/) RDF Site Summary (RSS)
- [schema](http://schema.org/) Schema.org
- [sd](http://www.w3.org/ns/sparql-service-description#) SPARQL 1.1 Service Description
- [sdmx](http://purl.org/linked-data/sdmx#) Vocabulary for publishing SDMX statistical data in RDF
- [sem](http://semanticweb.cs.vu.nl/2009/11/sem/) The Simple Event Model Ontology
- [set](http://www.w3.org/2000/10/swap/set#) Semantic Web Application Platform - Set
- [sf](http://www.opengis.net/ont/sf#) 
- [sh](http://www.w3.org/ns/shacl#) W3C Shapes Constraint Language (SHACL) Vocabulary
- [shex](http://www.w3.org/ns/shex#) Shape Expression Vocabulary
- [sioc](http://rdfs.org/sioc/ns#) SIOC Core Ontology Namespace
- [skos](http://www.w3.org/2004/02/skos/core#) SKOS Vocabulary
- [skosxl](http://www.w3.org/2008/05/skos-xl#) 
- [solid](http://www.w3.org/ns/solid/terms#) Solid Terms
- [sosa](http://www.w3.org/ns/sosa/) Sensor, Observation, Sample, and Actuator (SOSA) Ontology
- [sou](http://qudt.org/vocab/sou/) QUDT Vocabulary - Systems of Units - v2.1.25
- [ssn](http://www.w3.org/ns/ssn/) Semantic Sensor Network Ontology
- [stat](http://www.w3.org/ns/posix/stat#) 
- [string](http://www.w3.org/2000/10/swap/string#) Semantic Web Application Platform - String
- [test](http://www.w3.org/2006/03/test-description#) 
- [time](http://www.w3.org/2006/time#) OWL-Time
- [unit](http://qudt.org/vocab/unit/) QUDT Units of Measure for All Units Release 2.1.25
- [vaem](http://www.linkedmodel.org/schema/vaem#) 
- [vann](http://purl.org/vocab/vann/) VANN: A vocabulary for annotating vocabulary descriptions
- [vcard](http://www.w3.org/2006/vcard/ns#) Ontology for vCard
- [void](http://rdfs.org/ns/void#) Vocabulary of Interlinked Datasets (VoID)
- [vs](http://www.w3.org/2003/06/sw-vocab-status/ns#) SemWeb Vocab Status ontology
- [wdrs](http://www.w3.org/2007/05/powder-s#) POWDER-S Vocabulary
- [wgs](http://www.w3.org/2003/01/geo/wgs84_pos#) WGS84 Geo Positioning: an RDF vocabulary
- [xhv](http://www.w3.org/1999/xhtml/vocab#) 
- [xkos](http://rdf-vocabulary.ddialliance.org/xkos#) XKOS: an SKOS extension for representing statistical classifications
- [xsd](http://www.w3.org/2001/XMLSchema#) XML Schema Definition
- [rif](http://www.w3.org/2007/rif#) 
- [v](http://rdf.data-vocabulary.org/#) 
- [wdr](http://www.w3.org/2007/05/powder#) 
- [xml](http://www.w3.org/XML/1998/namespace/) 
